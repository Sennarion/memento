import benefitsData from '@/data/benefits.json';
import styles from './benefits.module.scss';

const icons = {
	qr: (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
			<rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
			<rect x="5" y="5" width="3" height="3" fill="currentColor" stroke="none" /><rect x="16" y="5" width="3" height="3" fill="currentColor" stroke="none" /><rect x="5" y="16" width="3" height="3" fill="currentColor" stroke="none" />
			<path d="M14 14h3v3h-3zM17 17h3M17 20v-3" />
		</svg>
	),
	price: (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
		</svg>
	),
	shield: (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 2l9 4v5c0 5.5-3.8 10.7-9 12C3.8 21.7 3 16.5 3 11V6l9-4z" />
			<path d="M9 12l2 2 4-4" />
		</svg>
	),
	design: (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
		</svg>
	),
	check: (
		<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 2l2.4 1.8 3 .2.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3 .2L12 22l-2.4-1.8-3-.2-.9-2.9L3.3 15l.9-2.9-.9-2.9 2.4-1.8.9-2.9 3-.2z" />
			<path d="M8.5 12.2l2.2 2.2 4.3-4.4" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	),
};

export default function Benefits() {
	return (
		<section className={styles.section} id="benefits">
			<div aria-hidden="true" className={`${styles.dots}`} />
			<div aria-hidden="true" className={`${styles.blob1} mem-blob`} />
			<div aria-hidden="true" className={`${styles.blob2} mem-blob`} />

			<div className={styles.inner}>
				<div className={styles.head} data-reveal>
					<div className={styles.label}>
						<span className={styles.labelDot} />
						<span className={styles.labelLine} />
						Чому MEMENTO
					</div>
					<h2 className={styles.title}>П&apos;ять причин довірити нам найважливіше</h2>
				</div>

				<div className={styles.grid}>
					{benefitsData.map(({ num, icon, title, text }, idx) => (
						<div
							className={styles.card}
							key={num}
							data-reveal
							style={{ '--reveal-delay': `${idx * 80}ms` }}
						>
							<span className={styles.cardNum}>{num}</span>
							<div className={styles.cardIcon}>{icons[icon]}</div>
							<h3 className={styles.cardTitle}>{title}</h3>
							<p className={styles.cardText}>{text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
