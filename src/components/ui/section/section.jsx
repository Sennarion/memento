import styles from './section.module.scss';

export default function Section({ children, id }) {
	return (
		<section id={id} className={styles.section}>
			{children}
		</section>
	);
}
