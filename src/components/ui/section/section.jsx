import classNames from 'classnames';
import styles from './section.module.scss';

export default function Section({ children, id, mod }) {
	return (
		<section
			id={id}
			className={classNames(styles.section, {
				[styles.dark]: mod === 'dark',
			})}
		>
			{children}
		</section>
	);
}
