import classNames from 'classnames';
import styles from './button.module.scss';

export default function Button({ type = 'button', href, onClick, text, isActive, mod }) {
	const buttonClass = classNames(styles.button, {
		[styles.active]: isActive,
		[styles[mod]]: mod,
	});

	if (href) {
		return (
			<a href={href} className={buttonClass}>
				{text}
			</a>
		);
	}

	return (
		<button onClick={onClick} type={type} className={buttonClass}>
			{text}
		</button>
	);
}
