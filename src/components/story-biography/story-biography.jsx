import classNames from 'classnames';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import { yeseva } from '@/fonts/fonts';
import styles from './story-biography.module.scss';

export default function StoryBiography({ biography }) {
	return (
		<Section>
			<Container>
				<h2 className={classNames(yeseva.className, styles.mainTitle)}>{biography.title}</h2>
				<ul className={styles.list}>
					{biography.sections.map(({ section, text }) => (
						<li className={styles.item} key={section}>
							<div className={styles.content}>
								{section && <h2 className={classNames(yeseva.className, styles.title)}>{section}</h2>}
								{text.map((paragraph, index) => (
									<p className={styles.text} key={index}>
										{paragraph}
									</p>
								))}
							</div>
						</li>
					))}
				</ul>
			</Container>
		</Section>
	);
}
