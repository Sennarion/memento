import Image from 'next/image';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import Button from '../ui/button/button';
import styles from './hero.module.scss';

export default function Hero() {
	return (
		<Section>
			<Container>
				<div className={styles.content}>
					<div className={styles.info}>
						<h1 className={styles.title}>Пам'ять, яка завжди поруч</h1>
						<p className={styles.text}>
							Іменні стальні таблички з QR-кодом, що веде до відео або фото дорогої людини. Гідне вшанування
							пам'яті - у дотику та погляді.
						</p>
						<Button text="Отримати консультацію" />
					</div>
					<div className={styles.imageW}>
						<Image className={styles.image} src="/hero.jpg" alt="QR-code" fill />
					</div>
				</div>
			</Container>
		</Section>
	);
}
