import Image from 'next/image';
import classNames from 'classnames';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import { yeseva } from '@/fonts/fonts';
import styles from './story-head.module.scss';

export default function StoryHead({ data }) {
	return (
		<Section>
			<Container>
				<div className={styles.poster}>
					<Image
						className={styles.posterImage}
						src={data.banner.url}
						fill
						alt={data.banner.description}
						priority
					/>
				</div>
				<div className={styles.mainPhoto}>
					<Image
						className={styles.mainPhotoImage}
						src={data.mainPhoto.url}
						fill
						alt={data.mainPhoto.description}
						priority
					/>
				</div>
				<h1 className={classNames(yeseva.className, styles.title)}>{data.name.text}</h1>
				<div className={styles.years}>
					{data.yearsOfLife.birthday} - {data.yearsOfLife.death}
				</div>
				{data.position && <div className={styles.position}>{data.position}</div>}
			</Container>
		</Section>
	);
}
