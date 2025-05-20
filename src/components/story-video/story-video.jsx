'use client';

import dynamic from 'next/dynamic';
import classNames from 'classnames';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import { yeseva } from '@/fonts/fonts';
import 'plyr-react/plyr.css';
import styles from './story-video.module.scss';

const Plyr = dynamic(() => import('plyr-react'), { ssr: false });

export default function StoryVideo({ video }) {
	return (
		<Section mod="dark">
			<Container>
				<h2 className={classNames(yeseva.className, styles.title)}>{video.title}</h2>
				<div className={styles.video}>
					<Plyr
						source={{
							type: 'video',
							sources: [
								{
									src: video.url,
									provider: 'youtube',
								},
							],
						}}
					/>
				</div>
			</Container>
		</Section>
	);
}
