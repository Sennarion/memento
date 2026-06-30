import Link from 'next/link';
import styles from './story-cta.module.scss';

export default function StoryCta() {
	return (
		<div className={styles.strip}>
			<span className={styles.text}>Сторінка пам'яті створена за допомогою</span>
			<Link href="/" className={styles.link}>MEMENTO</Link>
			<span className={styles.dot}>·</span>
			<Link href="/" className={styles.order}>Замовити табличку →</Link>
		</div>
	);
}
