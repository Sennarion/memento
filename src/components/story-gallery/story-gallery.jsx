'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import styles from './story-gallery.module.scss';

export default function StoryGallery({ photos }) {
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	const slides = photos.map(({ url, description }) => ({
		src: url,
		description: description || '',
	}));

	const handleClick = (idx) => {
		setIndex(idx);
		setOpen(true);
	};

	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.gallery}>
					{photos.map(({ url }, i) => (
						<button
							key={url}
							className={styles.thumb}
							onClick={() => handleClick(i)}
							type="button"
						>
							<Image className={styles.image} src={url} alt="Photo" fill />
						</button>
					))}
				</div>
			</div>

			<Lightbox
				plugins={[Thumbnails]}
				open={open}
				close={() => setOpen(false)}
				slides={slides}
				index={index}
				on={{ view: ({ index }) => setIndex(index) }}
			/>
		</section>
	);
}
