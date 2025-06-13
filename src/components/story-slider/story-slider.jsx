'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'plyr-react/plyr.css';
import styles from './story-slider.module.scss';

export default function StorySlider({ photos }) {
	return (
		<Section mod="dark">
			<Container>
				<Swiper
					className={styles.slider}
					modules={[EffectCoverflow, Autoplay, Pagination]}
					effect="coverflow"
					speed={1000}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					slidesPerView={1.4}
					centeredSlides
					loop
					pagination={{ clickable: false }}
					coverflowEffect={{
						rotate: 30,
						stretch: 20,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					}}
					breakpoints={{
						1024: {
							slidesPerView: 3,
						},
					}}
				>
					{photos.map(({ url, description, date }) => (
						<SwiperSlide className={styles.slide} key={url}>
							<Image className={styles.slideImage} src={url} alt={description} fill />
							{date && <div className={styles.slideDate}>{date}</div>}
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</Section>
	);
}
