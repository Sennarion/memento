import Image from 'next/image';
import { yeseva } from '@/fonts/fonts';
import BannerSlideshow from './banner-slideshow';
import VisitCounter from './visit-counter';
import ShareButton from './share-button';
import CandleWidget from './candle-widget';
import styles from './story-head.module.scss';

const MONTHS = {
	'січня': 0, 'лютого': 1, 'березня': 2, 'квітня': 3,
	'травня': 4, 'червня': 5, 'липня': 6, 'серпня': 7,
	'вересня': 8, 'жовтня': 9, 'листопада': 10, 'грудня': 11,
};

function parseUkrDate(str) {
	if (!str) return null;
	const parts = str.replace('р.', '').trim().split(/\s+/);
	const day = parseInt(parts[0]);
	const month = MONTHS[parts[1]?.toLowerCase()];
	const year = parseInt(parts[2]);
	if (isNaN(day) || month === undefined || isNaN(year)) return null;
	return new Date(year, month, day);
}

function calcAge(birthday, death) {
	const b = parseUkrDate(birthday);
	const d = parseUkrDate(death);
	if (!b || !d) return null;
	let age = d.getFullYear() - b.getFullYear();
	if (d < new Date(d.getFullYear(), b.getMonth(), b.getDate())) age--;
	return age;
}

function agePlural(n) {
	const mod10 = n % 10, mod100 = n % 100;
	if (mod100 >= 11 && mod100 <= 19) return 'років';
	if (mod10 === 1) return 'рік';
	if (mod10 >= 2 && mod10 <= 4) return 'роки';
	return 'років';
}

export default function StoryHead({ data, slug }) {
	const age = calcAge(data.yearsOfLife?.birthday, data.yearsOfLife?.death);

	return (
		<section className={styles.section}>
			<div className={styles.decor} aria-hidden="true">
				<div className={styles.blob} />
				<span className={styles.star1} />
				<span className={styles.star2} />
				<span className={styles.star3} />
			</div>

			<div className={styles.banner}>
				<BannerSlideshow
					photos={data.photos?.filter(p => p.url !== data.mainPhoto.url)}
					fallback={data.banner}
				/>
			</div>

			<div className={styles.inner}>
				<div className={styles.portraitArea}>
					<div className={styles.portrait}>
						<Image
							className={styles.portraitImg}
							src={data.mainPhoto.url}
							fill
							alt={data.mainPhoto.description}
							priority
						/>
					</div>
					<CandleWidget slug={slug} initialCount={data.candles || 0} />
				</div>

				{data.nickname && <div className={styles.nickname}>{data.nickname}</div>}

				<h1 className={`${yeseva.className} ${styles.name}`}>{data.name}</h1>

				{data.position && <p className={styles.position}>{data.position}</p>}

				<div className={styles.years}>
					{age !== null && (
						<span className={styles.yearAge}>{age} {agePlural(age)}</span>
					)}
					<div className={styles.yearsRow}>
						<div className={`${styles.yearBlock} ${styles.yearBirth}`}>
							<svg className={styles.yearIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
								<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
								<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
							</svg>
							<span className={styles.yearNum}>{data.yearsOfLife.birthday}</span>
							{data.birthPlace && <div className={styles.yearLocation}>{data.birthPlace}</div>}
						</div>
						{age === null && <span className={styles.yearConnector} aria-hidden="true" />}
						<div className={`${styles.yearBlock} ${styles.yearDeath}`}>
							<svg className={styles.yearIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
								<line x1="12" y1="2" x2="12" y2="22" />
								<line x1="4" y1="8" x2="20" y2="8" />
							</svg>
							<span className={styles.yearNum}>{data.yearsOfLife.death}</span>
							{data.burialPlace && <div className={styles.yearLocation}>{data.burialPlace}</div>}
						</div>
					</div>
				</div>


				<div className={styles.meta}>
					<VisitCounter slug={slug} initialCount={data.visits || 0} />
					<ShareButton name={data.name} />
				</div>
			</div>
		</section>
	);
}
