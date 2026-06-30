'use client';

import { useEffect, useState } from 'react';
import { incrementVisits } from '@/app/actions';
import styles from './story-head.module.scss';

function plural(n) {
	const mod10 = n % 10;
	const mod100 = n % 100;
	if (mod100 >= 11 && mod100 <= 19) return 'переглядів';
	if (mod10 === 1) return 'перегляд';
	if (mod10 >= 2 && mod10 <= 4) return 'перегляди';
	return 'переглядів';
}

export default function VisitCounter({ slug, initialCount }) {
	const [count, setCount] = useState(initialCount || 0);

	useEffect(() => {
		incrementVisits(slug).then(() => {
			setCount((c) => c + 1);
		});
	}, [slug]);

	if (!count) return null;

	return (
		<div className={styles.visits}>
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
				<circle cx="12" cy="12" r="3" />
			</svg>
			{count.toLocaleString('uk-UA')} {plural(count)}
		</div>
	);
}
