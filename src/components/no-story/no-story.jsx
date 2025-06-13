import Image from 'next/image';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import Button from '../ui/button/button';
import styles from './no-story.module.scss';

export default function NoStory() {
	return (
		<Section>
			<Container>
				<div className={styles.content}>
					<div className={styles.logo}>
						<Image src="/logo.png" alt="Memento Logo" quality={100} fill />
					</div>
					<h1 className={styles.text}>Ця історія ще не активована</h1>
					<Button href="memento.com.ua" text="Головна сторінка" />
				</div>
			</Container>
		</Section>
	);
}
