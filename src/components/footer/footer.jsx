import Image from 'next/image';
import Link from 'next/link';
import Container from '../ui/container/container';
import Social from '../social/social';
import styles from './footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footerContent}>
					<Link href="/" className={styles.logoWrapper}>
						<Image className={styles.logo} src="/logo.png" alt="Memento Logo" quality={100} fill />
					</Link>
					<div className={styles.contacts}>
						<p className={styles.contact}>(099) 064 84 14</p>
						<Social />
					</div>
				</div>
				<p className={styles.policy}>© Memento 2025</p>
			</Container>
		</footer>
	);
}
