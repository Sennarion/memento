'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './story-head.module.scss';

const INTERVAL = 5000;
const FADE = 0.13;

const KB = [styles.slideInner0, styles.slideInner1, styles.slideInner2, styles.slideInner3];

function applyEdgeMask(img) {
	const container = img.parentElement;
	if (!container) return;
	const cw = container.clientWidth;
	const ch = container.clientHeight;
	const iw = img.naturalWidth;
	const ih = img.naturalHeight;
	if (!cw || !ch || !iw || !ih) return;

	const imgRatio = iw / ih;
	const containerRatio = cw / ch;

	let rw, rh, ox, oy;
	if (imgRatio > containerRatio) {
		rw = cw; rh = cw / imgRatio;
		ox = 0; oy = (ch - rh) / 2;
	} else {
		rh = ch; rw = ch * imgRatio;
		ox = (cw - rw) / 2; oy = 0;
	}

	const pct = (v) => v.toFixed(2) + '%';
	const l  = ox / cw * 100;
	const r  = (ox + rw) / cw * 100;
	const t  = oy / ch * 100;
	const b  = (oy + rh) / ch * 100;
	const fl = l  + (rw / cw * FADE * 100);
	const fr = r  - (rw / cw * FADE * 100);
	const ft = t  + (rh / ch * FADE * 100);
	const fb = b  - (rh / ch * FADE * 100);

	const h = `linear-gradient(to right,  transparent ${pct(l)}, black ${pct(fl)}, black ${pct(fr)}, transparent ${pct(r)})`;
	const v = `linear-gradient(to bottom, transparent ${pct(t)}, black ${pct(ft)}, black ${pct(fb)}, transparent ${pct(b)})`;
	const mask = `${h}, ${v}`;

	img.style.webkitMaskImage = mask;
	img.style.maskImage = mask;
	img.style.webkitMaskComposite = 'source-in';
	img.style.maskComposite = 'intersect';
	img.style.opacity = '1';
}

export default function BannerSlideshow({ photos, fallback }) {
	const sources = photos?.length ? photos : [fallback];

	const [current, setCurrent] = useState(0);
	const innerRefs = useRef([]);
	const kbCounter = useRef(0);

	// Перезапуск Ken Burns без перемонтування Image
	useEffect(() => {
		const el = innerRefs.current[current];
		if (!el) return;
		const cls = KB[kbCounter.current % 4];
		kbCounter.current++;
		KB.forEach(c => el.classList.remove(c));
		void el.offsetWidth; // force reflow → animation restart
		el.classList.add(cls);
	}, [current]);

	useEffect(() => {
		if (sources.length <= 1) return;
		const timer = setInterval(() => {
			setCurrent(prev => (prev + 1) % sources.length);
		}, INTERVAL);
		return () => clearInterval(timer);
	}, [sources.length]);

	return (
		<>
			{sources.map((src, i) => (
				<div key={i} className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}>
					<div ref={el => { innerRefs.current[i] = el; }} className={styles.slideInner}>
						<Image
							className={styles.slideBlur}
							src={src.url}
							fill
							alt=""
							aria-hidden="true"
							priority={i === 0}
						/>
						<Image
							className={styles.slideImg}
							src={src.url}
							fill
							alt={src.description || ''}
							priority={i === 0}
							onLoad={(e) => applyEdgeMask(e.target)}
						/>
					</div>
				</div>
			))}
			<svg className={styles.bannerWave} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
				<path d="M0,80 L0,60 Q720,20 1440,60 L1440,80 Z" fill="#fbfaf7" />
			</svg>
		</>
	);
}
