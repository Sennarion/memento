import Image from 'next/image';
import Link from 'next/link';
import styles from './hero.module.scss';

export default function Hero() {
	return (
		<section className={styles.section} id="home">
			<div aria-hidden="true" className={styles.blobs}>
				<div className={`${styles.blob} ${styles.blob1} mem-blob`} />
				<div className={`${styles.blob} ${styles.blob2} mem-blob`} />
				<div className={styles.ring1} />
				<div className={styles.ring2} />
				<div className={styles.ring3} />
				<div className={styles.star1} />
				<div className={styles.star2} />
				<div className={styles.star3} />
				<div className={styles.fadeBottom} />
			</div>

			<div className={styles.inner}>
				<div className={styles.grid}>
					<div className={styles.content}>
						<div className={styles.badge}>QR-таблички на пам&apos;ятники</div>
						<h1 className={styles.title}>
							Пам&apos;ятник зберігає ім&apos;я.
							<br />
							<em className={styles.titleItalic}>Ми — людину.</em>
						</h1>
						<p className={styles.text}>
							Приходиш до близького — і хочеш не просто постояти, а відчути його знову: переглянути
							фото, побачити відеоспогади. Або проходиш повз могилу і впізнаєш знайоме обличчя.
							Один скан — і відкривається ціла історія людини.
						</p>
						<div className={styles.cta}>
							<Link href="#contact" className={styles.ctaPrimary}>
								Отримати консультацію
							</Link>
							<Link href="#demo" className={styles.ctaSecondary}>
								Переглянути приклад
							</Link>
						</div>
						<div className={styles.stats}>
							<div className={styles.stat}>
								<div className={styles.statValue}>3M VHB</div>
								<div className={styles.statLabel}>Кріплення на роки</div>
							</div>
							<div className={styles.statDivider} />
							<div className={styles.stat}>
								<div className={styles.statValue}>1,5 мм</div>
								<div className={styles.statLabel}>Нержавіюча сталь</div>
							</div>
							<div className={styles.statDivider} />
							<div className={styles.stat}>
								<div className={styles.statValue}>∞</div>
								<div className={styles.statLabel}>Вічна гарантія</div>
							</div>
						</div>
					</div>

					<div className={styles.plaqueWrap}>
						<div className={styles.plaqueGlow} />
						<div className={`${styles.plaqueFloat} mem-float`}>
							<div className={styles.plaque}>
								<div className={styles.plaqueBorder} />
								<div className={styles.plaqueSheen} />
								<div className={styles.plaqueBrush} />
								<Image
									src="/assets/qr.svg"
									alt="QR-код пам'яті"
									fill
									className={styles.plaqueQr}
								/>
								<div className={styles.plaqueScan} aria-hidden="true">
									<div className={`${styles.plaqueScanLine} mem-scan-line`} />
								</div>
								<div className={styles.plaqueDomain}>memento.com.ua</div>
							</div>
						</div>

						<div className={styles.hint}>
							<span className={styles.hintDot} aria-hidden="true" />
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
								<rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
								<rect x="5" y="5" width="3" height="3" /><rect x="16" y="5" width="3" height="3" /><rect x="5" y="16" width="3" height="3" />
								<path d="M14 14h3v3h-3zM17 17h3M17 20v-3" />
							</svg>
							наведіть камеру
						</div>

						<div className={`${styles.orbit} ${styles.orbitVideo} mem-float`}>
							<span className={styles.orbitIcon}>
								<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4.5v15l13-7.5z" /></svg>
							</span>
							<span>
								<span className={styles.orbitTitle}>Відеоспогад</span>
								<span className={styles.orbitSub}>теплі кадри життя</span>
							</span>
						</div>

						<div className={`${styles.orbit} ${styles.orbitPhoto} mem-float`}>
							<span className={styles.orbitIcon}>
								<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
									<rect x="3" y="5" width="18" height="14" rx="2.5" /><circle cx="8.5" cy="10.5" r="1.6" /><path d="M20 16l-4.5-4.5L6 19" />
								</svg>
							</span>
							<span>
								<span className={styles.orbitTitle}>Фотогалерея</span>
								<span className={styles.orbitSub}>роки спогадів</span>
							</span>
						</div>

						<div className={`${styles.orbit} ${styles.orbitCandle} mem-float`}>
							<span className={styles.orbitIcon}>
								<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
									<path d="M12 2c-1.5 2.5-4 6.5-4 10a4 4 0 008 0c0-3.5-2.5-7.5-4-10z"/>
									<rect x="9" y="17" width="6" height="5" rx="1"/>
								</svg>
							</span>
							<span>
								<span className={styles.orbitTitle}>Свічка пам&apos;яті</span>
								<span className={styles.orbitSub}>запали онлайн</span>
							</span>
						</div>

						<div className={`${styles.orbit} ${styles.orbitBio} mem-float`}>
							<span className={styles.orbitIcon}>
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="12" cy="8" r="4"/>
									<path d="M4 20v-1a8 8 0 0116 0v1"/>
								</svg>
							</span>
							<span>
								<span className={styles.orbitTitle}>Біографія</span>
								<span className={styles.orbitSub}>життєвий шлях</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
