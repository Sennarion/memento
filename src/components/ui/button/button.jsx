import classNames from 'classnames';
import styles from './button.module.scss';

export default function Button({ type = 'button', href, text, mod }) {
	if (href) {
		return (
			<a href={href} className={styles.button}>
				{text}
			</a>
		);
	}

	return (
		<button type={type} className={styles.button}>
			{text}
		</button>
	);
}
