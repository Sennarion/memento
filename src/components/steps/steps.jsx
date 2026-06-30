import stepsData from '@/data/steps.json';
import styles from './steps.module.scss';

export default function Steps() {
	return (
		<section className={styles.section} id="how">
			<div aria-hidden="true" className={`${styles.blob} mem-blob`} />
			<div aria-hidden="true" className={styles.grid_bg} />

			<div className={styles.inner}>
				<div className={styles.head} data-reveal>
					<div className={styles.label}>
						<span className={styles.labelDot} />
						<span className={styles.labelLine} />
						Як це працює
					</div>
					<h2 className={styles.title}>
						Чотири спокійні кроки —<br />від розмови до вічної пам&apos;яті
					</h2>
				</div>

				<div className={styles.grid}>
{stepsData.map(({ num, ph, title, text }, idx) => (
						<div
							className={`${styles.card} ${idx % 2 === 1 ? styles.cardDown : ''}`}
							key={num}
							data-reveal
							style={{ '--reveal-delay': `${idx * 120}ms` }}
						>
							<span className={styles.cardTop} aria-hidden="true" />
							<span className={styles.cardBgNum} aria-hidden="true">{num}</span>
							<span className={styles.cardPh}>{ph}</span>
							<h3 className={styles.cardTitle}>{title}</h3>
							<p className={styles.cardText}>{text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
