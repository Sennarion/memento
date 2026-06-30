'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import classNames from 'classnames';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import { IoQrCodeOutline } from 'react-icons/io5';
import { IoIosPricetags } from 'react-icons/io';
import { FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import advantagesData from '@/data/advantages.json';
import styles from './advantages.module.scss';

const iconMap = {
	qrcode: IoQrCodeOutline,
	price: IoIosPricetags,
	shield: FaShieldAlt,
	design: MdDesignServices,
	check: BsFillPatchCheckFill,
};

export default function Advantages() {
	const swiperRef = useRef();

	return (
		<Section>
			<Container>
				<div className={styles.content}>
					<div className={styles.info}>
						<h2 className={styles.mainTitle}>
							<strong>5 причин,</strong> чому нам довіряють найцінніше — збереження пам'яті про близьких
						</h2>
						<p className={styles.text}>
							Наша мета — створити вічний простір пам'яті, де сучасні технології гармонійно поєднуються з
							людською глибиною. Обираючи Memento, ви отримуєте не просто виріб — ви отримуєте турботу,
							елегантність і впевненість.
						</p>
					</div>
					<div className={styles.sliderW}>
						<div className={styles.navigation}>
							<button
								className={classNames(styles.navButton, styles.prev)}
								onClick={() => swiperRef.current?.slidePrev()}
								aria-label="Previous slide"
							>
								<FaChevronLeft />
							</button>
							<button
								className={classNames(styles.navButton, styles.next)}
								onClick={() => swiperRef.current?.slideNext()}
								aria-label="Next slide"
							>
								<FaChevronRight />
							</button>
						</div>

						<Swiper
							className={styles.slider}
							modules={[Navigation, Autoplay, EffectFade]}
							autoplay={{
								delay: 3000,
							}}
							effect="fade"
							loop={true}
							slidesPerView={1}
							onBeforeInit={(swiper) => {
								swiperRef.current = swiper;
							}}
						>
							{advantagesData.map(({ title, text, icon }, idx) => {
								const Icon = iconMap[icon];
								return (
									<SwiperSlide className={styles.slide} key={title}>
										<div className={styles.info}>
											<div className={styles.iconW}>
												<Icon className={styles.icon} />
											</div>
											<div className={styles.number}>{String(idx + 1).padStart(2, '0')}</div>
											<h3 className={styles.title}>{title}</h3>
											<p className={styles.text}>{text}</p>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			</Container>
		</Section>
	);
}
