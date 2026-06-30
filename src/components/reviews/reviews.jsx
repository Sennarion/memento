'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import reviewsData from '@/data/reviews.json';
import styles from './reviews.module.scss';

export default function Reviews() {
	const [swiperApi, setSwiperApi] = useState(null);

	return (
		<section className={styles.section} id="reviews">
			<div aria-hidden="true" className={styles.grid_bg} />
			<div aria-hidden="true" className={`${styles.blob} mem-blob`} />

			<div className={styles.inner}>
				<div className={styles.topRow} data-reveal>
					<div>
						<div className={styles.label}>
							<span className={styles.labelDot} />
							<span className={styles.labelLine} />
							Відгуки
						</div>
						<h2 className={styles.title}>Слова тих, хто нам довірив пам&apos;ять</h2>
					</div>
					<div className={styles.ratingBox}>
						<div className={styles.ratingNum}>4,9</div>
						<div className={styles.ratingDivider} />
						<div>
							<div className={styles.ratingStars}>★★★★★</div>
							<div className={styles.ratingText}>
								понад 120 родин<br />довірили нам пам&apos;ять
							</div>
						</div>
					</div>
				</div>

				<div className={styles.swiperWrap} data-reveal style={{ '--reveal-delay': '150ms' }}>
					<Swiper
						modules={[Autoplay, Pagination]}
						onSwiper={setSwiperApi}
						loop
						watchSlidesProgress
						spaceBetween={20}
						autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
						pagination={{ el: `.${styles.paginationEl}`, clickable: true, bulletClass: styles.dot, bulletActiveClass: styles.dotActive }}
						breakpoints={{
							0: { slidesPerView: 1.1, spaceBetween: 14 },
							560: { slidesPerView: 2, spaceBetween: 16 },
							880: { slidesPerView: 3, spaceBetween: 20 },
						}}
						className={styles.swiper}
					>
						{reviewsData.map(({ text, name, initial, city }, idx) => (
							<SwiperSlide key={idx}>
								<div className={styles.card}>
									<span className={styles.cardStripe} aria-hidden="true" />
									<span className={styles.cardBgQ} aria-hidden="true">&rdquo;</span>
									<div className={styles.cardStars}>★★★★★</div>
									<p className={styles.cardText}>{text}</p>
									<div className={styles.cardFooter}>
										<div className={styles.cardAvatar}>{initial}</div>
										<div>
											<div className={styles.cardName}>
												{name}
												<svg width="14" height="14" viewBox="0 0 24 24" fill="#4a6b5a">
													<path d="M12 2l2.4 1.8 3 .2.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3 .2L12 22l-2.4-1.8-3-.2-.9-2.9L3.3 15l.9-2.9-.9-2.9 2.4-1.8.9-2.9 3-.2z" />
													<path d="M8.5 12.2l2.2 2.2 4.3-4.4" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</div>
											<div className={styles.cardCity}>{city} · Підтверджено</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<div className={styles.controls}>
						<button
							className={styles.arrow}
							aria-label="Попередній відгук"
							onClick={() => swiperApi?.slidePrev()}
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
								<path d="M15 5l-7 7 7 7" />
							</svg>
						</button>
						<div className={`${styles.pagination} ${styles.paginationEl}`} />
						<button
							className={styles.arrow}
							aria-label="Наступний відгук"
							onClick={() => swiperApi?.slideNext()}
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
								<path d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
