'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import classNames from 'classnames';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from './advantages.module.scss';

const advantages = [
	{
		title: 'Швидкий доступ до спогадів',
		text: 'Просто наведіть камеру телефона на QR-код — і в одну мить відкриється персональна сторінка з фото, відео та теплими словами. Без застосунків, без складнощів.',
	},
	{
		title: 'Доступна ціна',
		text: 'Ми прагнемо зробити пам’ять доступною для кожного, тому пропонуємо оптимальне поєднання ціни та якості.',
	},
	{
		title: 'Довговічний матеріал',
		text: 'Ми використовуємо якісну нержавіючу сталь завтовшки 1,5 мм з лазерною порізкою — це точність і надійність на роки. Кріплення — на суперміцний скотч американсього виробництва 3M VHB, який витримує дощ, сонце й мороз.',
	},
	{
		title: 'Індивідуальний дизайн',
		text: 'Ми створюємо дизайн з урахуванням ваших побажань — кожна табличка унікальна, як і людина, яку вона вшановує.',
	},
	{
		title: 'Вічна гарантія',
		text: 'Ми впевнені в якості наших матеріалів, тому надаємо безстрокову гарантію на кожну табличку.',
	},
];

export default function Advantages() {
	const swiperRef = useRef();

	return (
		<Section>
			<Container>
				<div className={styles.content}>
					<div className={styles.info}>
						<h2 className={styles.mainTitle}>
							<strong>5 причин,</strong> чому нам довіряють найцінніше - пам'ять про близьких
						</h2>
						<p>
							Наша мета - створити вічний простір пам'яті, який поєднує сучасні технології та людську глибину.
							Обираючи Memento, ви отримуєте більше, ніж виріб - ви отримуєте турботу, стиль і довіру.
						</p>
					</div>
					<div className={styles.sliderW}>
						<div className={styles.navigation}>
							<button
								className={classNames(styles.navButton, styles.prev)}
								onClick={() => swiperRef.current?.slidePrev()}
								aria-label="Previous slide"
							>
								{'<'}
							</button>
							<button
								className={classNames(styles.navButton, styles.next)}
								onClick={() => swiperRef.current?.slideNext()}
								aria-label="Next slide"
							>
								{'>'}
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
							{advantages.map(({ title, text }, idx) => (
								<SwiperSlide className={styles.slide} key={title}>
									<div className={styles.info}>
										<div className={styles.number}>{String(idx + 1).padStart(2, '0')}</div>
										<h3 className={styles.title}>{title}</h3>
										<p className={styles.text}>{text}</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</Container>
		</Section>
	);
}
