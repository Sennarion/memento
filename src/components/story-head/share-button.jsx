'use client';

import { useState } from 'react';
import styles from './story-head.module.scss';

export default function ShareButton({ name }) {
	const [copied, setCopied] = useState(false);

	const handleShare = async () => {
		const url = window.location.href;

		if (navigator.share) {
			try {
				await navigator.share({
					title: `${name} – Memento`,
					text: `Сторінка пам'яті ${name}`,
					url,
				});
			} catch {
				// user cancelled — ignore
			}
			return;
		}

		await navigator.clipboard.writeText(url);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<button className={styles.shareBtn} onClick={handleShare} type="button">
			{copied ? (
				<>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
						<polyline points="20 6 9 17 4 12" />
					</svg>
					Скопійовано
				</>
			) : (
				<>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
						<circle cx="18" cy="5" r="3" />
						<circle cx="6" cy="12" r="3" />
						<circle cx="18" cy="19" r="3" />
						<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
						<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
					</svg>
					Поділитись
				</>
			)}
		</button>
	);
}
