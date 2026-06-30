'use client';

import { useState, useEffect } from 'react';
import { incrementCandles } from '@/app/actions';
import styles from './story-head.module.scss';

function plural(n) {
	const mod10 = n % 10, mod100 = n % 100;
	if (mod100 >= 11 && mod100 <= 19) return 'свічок';
	if (mod10 === 1) return 'свічка';
	if (mod10 >= 2 && mod10 <= 4) return 'свічки';
	return 'свічок';
}

export default function CandleButton({ slug, initialCount }) {
	const [count, setCount] = useState(initialCount || 0);
	const [lit, setLit] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLit(!!localStorage.getItem(`candle_${slug}`));
	}, [slug]);

	async function handleClick() {
		if (lit || loading) return;
		setLoading(true);
		await incrementCandles(slug);
		setCount((c) => c + 1);
		setLit(true);
		localStorage.setItem(`candle_${slug}`, '1');
		window.dispatchEvent(new Event('candlelit'));
		setLoading(false);
	}

	return (
		<button
			className={`${styles.candleBtn} ${lit ? styles.candleLit : ''}`}
			onClick={handleClick}
			disabled={lit || loading}
			type="button"
		>
			<span>{lit ? 'Свічку запалено' : 'Запалити свічку пам\'яті'}</span>
			{count > 0 && (
				<span className={styles.candleCount}>
					{count.toLocaleString('uk-UA')} {plural(count)}
				</span>
			)}
		</button>
	);
}
