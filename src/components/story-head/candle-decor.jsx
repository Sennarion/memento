'use client';

import { useState, useEffect } from 'react';
import styles from './story-head.module.scss';

export default function CandleDecor({ slug }) {
	const [lit, setLit] = useState(false);

	useEffect(() => {
		setLit(!!localStorage.getItem(`candle_${slug}`));

		function onLit() { setLit(true); }
		window.addEventListener('candlelit', onLit);
		return () => window.removeEventListener('candlelit', onLit);
	}, [slug]);

	return (
		<div className={`${styles.candleDecor} ${lit ? styles.candleDecorLit : ''}`} aria-hidden="true">
			<svg viewBox="0 0 28 58" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g className={styles.flame}>
					<ellipse cx="14" cy="10" rx="7" ry="9" fill="rgba(251,146,60,0.22)" />
					<path d="M14 1 C17.5 6, 22 12, 14 20 C6 12, 10.5 6, 14 1" fill="#FB923C" />
					<path d="M14 9 C15.5 12.5, 16.5 16, 14 19.5 C11.5 16, 12.5 12.5, 14 9" fill="#FDE68A" />
				</g>
				<line x1="14" y1="20" x2="14" y2="25" stroke="#78716C" strokeWidth="1.3" strokeLinecap="round" />
				<rect x="5" y="24" width="18" height="32" rx="3" fill="#FEF9C3" />
				<rect x="5" y="24" width="18" height="5" rx="3" fill="#FEF3C7" />
				<path d="M7 29 Q5.5 34 6.5 38 L7 29 Z" fill="#FEF3C7" opacity="0.7" />
			</svg>
		</div>
	);
}
