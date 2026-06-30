import { yeseva } from '@/fonts/fonts';
import styles from './story-achievements.module.scss';

export default function StoryAchievements({ achievements }) {
	if (!achievements?.length) return null;

	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.titleWrap}>
					<h2 className={`${yeseva.className} ${styles.title}`}>Важливі моменти життя</h2>
					<div className={styles.ornament} aria-hidden="true">
						<span /><span className={styles.gem} /><span />
					</div>
				</div>
				<ul className={styles.list}>
					{achievements.map((item, i) => (
						<li key={i} className={styles.item}>
							<span className={styles.year}>{item.year}</span>
							<span className={styles.dot} aria-hidden="true" />
							<span className={styles.text}>{item.text}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
