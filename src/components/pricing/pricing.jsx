'use client';

import pricingData from '@/data/pricing.json';
import { usePackage } from '@/context/package';
import styles from './pricing.module.scss';

export default function Pricing() {
	const { setPkg } = usePackage();

	return (
		<section className={styles.section} id="pricing">
			<div aria-hidden="true" className={styles.grid_bg} />
			<div aria-hidden="true" className={`${styles.blob} mem-blob`} />

			<div className={styles.inner}>
				<div className={styles.head} data-reveal>
					<div className={styles.diamond} aria-hidden="true" />
					<div className={styles.label}>
						<span className={styles.labelLine} />
						Пакети
						<span className={styles.labelLine} />
					</div>
					<h2 className={styles.title}>Прозорі ціни, без прихованих умов</h2>
					<p className={styles.subtitle}>Кожен пакет включає вічну гарантію та доставку Новою Поштою по Україні.</p>
				</div>

				<div className={styles.grid}>
					{pricingData.map(({ name, price, popular, tag, features }, idx) => (
						<div
							className={`${styles.card} ${popular ? styles.cardPopular : styles.cardBase}`}
							key={name}
							data-reveal
							style={{ '--reveal-delay': `${idx * 120}ms` }}
						>
							{popular && <div className={styles.popularBadge}>Найчастіший вибір</div>}
							<div className={styles.cardIconWrap}>
								<span className={`${styles.cardIconQr} ${popular ? styles.cardIconQrPopular : ''}`}>
									<span className={styles.cardIconDot} />
								</span>
							</div>
							<div className={`${styles.cardTag} ${popular ? styles.cardTagPopular : ''}`}>{tag}</div>
							<div className={`${styles.cardName} ${popular ? styles.cardNamePopular : ''}`}>{name}</div>
							<div className={styles.cardPriceRow}>
								<span className={`${styles.cardPrice} ${popular ? styles.cardPricePopular : ''}`}>{price}</span>
								<span className={`${styles.cardCurrency} ${popular ? styles.cardCurrencyPopular : ''}`}>₴</span>
							</div>
							<div className={`${styles.cardSub} ${popular ? styles.cardSubPopular : ''}`}>одноразово · доставка та гарантія включені</div>
							<div className={`${styles.cardDivider} ${popular ? styles.cardDividerPopular : ''}`} />
							<ul className={styles.cardFeatures}>
								{features.map((f) => (
									<li className={styles.cardFeature} key={f}>
										<span className={`${styles.cardCheck} ${popular ? styles.cardCheckPopular : ''}`} aria-hidden="true">
											<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
												<path d="M5 12l5 5L19 7" />
											</svg>
										</span>
										<span className={`${styles.cardFeat} ${popular ? styles.cardFeatPopular : ''}`}>{f}</span>
									</li>
								))}
							</ul>
							<a
								href="#contact"
								className={`${styles.cardCta} ${popular ? styles.cardCtaPopular : styles.cardCtaBase}`}
								onClick={() => setPkg(name)}
							>
								Обрати пакет
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
