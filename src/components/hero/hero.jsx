import Section from '../ui/section/section';
import Container from '../ui/container/container';
import styles from './hero.module.scss';

export default function Hero() {
	return (
		<Section>
			<Container>
				<div className={styles.wrapper}>
					<h1 className={styles.title}>Сайт знаходиться на етапі розробки, незарабом реліз :)</h1>
				</div>
			</Container>
		</Section>
	);
}
