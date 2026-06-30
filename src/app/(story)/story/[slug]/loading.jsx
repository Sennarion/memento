import styles from './loading.module.scss';

export default function StoryLoading() {
	return (
		<div className={styles.wrap}>
			<div className={styles.banner} />

			<div className={styles.inner}>
				<div className={styles.portraitArea}>
					<div className={styles.portrait} />
					<div className={styles.candleWidget}>
						<div className={styles.candleCircle} />
						<div className={styles.candleText}>
							<div className={styles.candleLine} />
							<div className={styles.candleLineSm} />
						</div>
					</div>
				</div>

				<div className={`${styles.line} ${styles.name}`} />
				<div className={`${styles.line} ${styles.position}`} />

				<div className={styles.years}>
					<div className={styles.yearAge} />
					<div className={styles.yearsRow}>
						<div className={styles.yearBlock} />
						<div className={styles.yearBlock} />
					</div>
				</div>
			</div>
		</div>
	);
}
