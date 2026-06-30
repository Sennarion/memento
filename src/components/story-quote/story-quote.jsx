import styles from './story-quote.module.scss';

export default function StoryQuote({ quote }) {
	if (!quote?.text) return null;

	return (
		<section className={styles.section}>
			<div className={styles.decor} aria-hidden="true">&ldquo;</div>
			<div className={styles.inner}>
				<blockquote className={styles.text}>{quote.text}</blockquote>
				<p className={styles.author}>— {quote.author}</p>
			</div>
		</section>
	);
}
