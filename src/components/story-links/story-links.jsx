import styles from './story-links.module.scss';

export default function StoryLinks({ links }) {
	if (!links?.length) return null;

	return (
		<div className={styles.wrap}>
			{links.map((link, i) => (
				<a
					key={i}
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					className={styles.link}
				>
					{link.label}
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</a>
			))}
		</div>
	);
}
