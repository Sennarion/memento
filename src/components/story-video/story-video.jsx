'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './story-video.module.scss';

function getYouTubeId(url) {
	const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^?&\s]+)/);
	return match ? match[1] : null;
}

export default function StoryVideo({ video }) {
	const [playing, setPlaying] = useState(false);
	const videoId = getYouTubeId(video.url);
	if (!videoId) return null;

	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.video}>
					{playing ? (
						<iframe
							src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&iv_load_policy=3&color=white`}
							title={video.title || 'Відео'}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					) : (
						<button className={styles.facade} onClick={() => setPlaying(true)} type="button">
							<Image
								src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
								fill
								alt={video.title || 'Відео'}
								className={styles.thumbnail}
							/>
							<span className={styles.playBtn} aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="currentColor">
									<path d="M8 5v14l11-7z" />
								</svg>
							</span>
						</button>
					)}
				</div>
				{video.title && <p className={styles.videoTitle}>{video.title}</p>}
			</div>
		</section>
	);
}
