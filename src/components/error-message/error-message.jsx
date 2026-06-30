import Image from 'next/image';
import Link from 'next/link';
import styles from './error-message.module.scss';

export default function ErrorMessage({ error }) {
	return (
		<section className={styles.section}>
			<div className={styles.logo}>
				<Image src="/logo.png" alt="Memento Logo" quality={100} fill />
			</div>
			<h1 className={styles.text}>{error}</h1>
			<Link href="/" className={styles.link}>На головну сторінку</Link>
		</section>
	);
}
