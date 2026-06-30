import styles from './demo.module.scss';

const checkIcon = (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M5 12l5 5L19 7" />
	</svg>
);

const features = [
	{ icon: checkIcon, text: 'Зворушливий відеомонтаж із ваших матеріалів' },
	{ icon: checkIcon, text: 'Галерея фотографій різних років' },
	{ icon: checkIcon, text: 'Біографія, дати, місця, важливі історії' },
	{ icon: checkIcon, text: 'Відкрито для всіх — рідні, друзі та перехожі сканують без реєстрацій' },
];

export default function Demo() {
	return (
		<section className={styles.section} id="demo">
			<div aria-hidden="true" className={styles.grid_bg} />
			<div aria-hidden="true" className={`${styles.blob} mem-blob`} />

			<div className={styles.inner}>
				<div className={styles.grid}>
					<div className={styles.phoneWrap} data-reveal style={{ '--reveal-delay': '200ms' }}>
						<div aria-hidden="true" className={styles.phoneGlow} />
						<div aria-hidden="true" className={styles.phoneRing} />
						<div className={`${styles.privateBadge} mem-float`}>
							<span className={styles.privateDot} />
							Сторінка пам'яті
						</div>

						<div className={styles.phone}>
							<div className={styles.phoneNotch} />
							<div className={styles.phoneScreen}>
								<div className={styles.phoneInner}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src="/story.png"
										alt="Приклад сторінки пам'яті"
										className={styles.phoneStoryImg}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.content} data-reveal style={{ '--reveal-delay': '100ms' }}>
						<div className={styles.label}>
							<span className={styles.labelDot} />
							<span className={styles.labelLine} />
							Сторінка пам&apos;яті
						</div>
						<h2 className={styles.title}>Що відкриває QR-код</h2>
						<p className={styles.text}>
							Одне наведення камери відкриває персональну сторінку — з відеоспогадами, галереєю фото та теплими словами. Для рідних, друзів і кожного, хто хоче дізнатись більше про цю людину.
						</p>
						<div className={styles.features}>
							{features.map(({ icon, text }, idx) => (
								<div
									className={styles.feature}
									key={text}
									data-reveal
									style={{ '--reveal-delay': `${200 + idx * 80}ms` }}
								>
									<span className={styles.featureIcon}>{icon}</span>
									<span className={styles.featureText}>{text}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
