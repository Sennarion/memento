import { CiFacebook, CiLinkedin, CiInstagram } from 'react-icons/ci';
import styles from './social.module.scss';

export default function Social() {
	return (
		<div className={styles.info}>
			<span className={styles.infoText}>Слідкуй за новинами</span>
			<ul className={styles.socialList}>
				<li className={styles.socialItem}>
					<a className={styles.socialLink} href="/" target="_blank" rel="noreferrer">
						<CiFacebook size="40" />
					</a>
				</li>
				<li className={styles.socialItem}>
					<a className={styles.socialLink} href="/" target="_blank" rel="noreferrer">
						<CiLinkedin size="40" />
					</a>
				</li>
				<li className={styles.socialItem}>
					<a className={styles.socialLink} href="/" target="_blank" rel="noreferrer">
						<CiInstagram size="40" />
					</a>
				</li>
			</ul>
		</div>
	);
}
