import { yeseva } from '@/fonts/fonts';
import styles from './story-biography.module.scss';

export default function StoryBiography({ biography }) {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<ul className={styles.list}>
					{biography.sections.map(({ section, text }) => (
						<li className={styles.item} key={section}>
							<div className={styles.content}>
								{section && (
									<h2 className={`${yeseva.className} ${styles.title}`}>{section}</h2>
								)}
								{text.map((paragraph, index) => (
									<p className={styles.text} key={index}>{paragraph}</p>
								))}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
