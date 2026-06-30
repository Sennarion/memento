import Link from 'next/link';
import styles from './footer.module.scss';

const nav = [
	{ href: '#how', label: 'Як це працює' },
	{ href: '#benefits', label: 'Переваги' },
	{ href: '#demo', label: 'Приклад сторінки' },
	{ href: '#pricing', label: 'Ціни' },
	{ href: '#faq', label: 'Питання' },
];

const socials = [
	{
		href: 'https://instagram.com',
		label: 'Instagram',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
				<rect x="3" y="3" width="18" height="18" rx="5" />
				<circle cx="12" cy="12" r="4" />
				<circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
			</svg>
		),
	},
	{
		href: 'https://t.me/memento_ua',
		label: 'Telegram',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 4 3 11l5 2 2 6 3-4 5 4z" />
				<path d="M8 13l9-6" />
			</svg>
		),
	},
	{
		href: 'viber://chat',
		label: 'Viber',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 3c4.5 0 8 3 8 7.2 0 4.2-3.5 7.2-8 7.2-.8 0-1.6-.1-2.3-.3L5 19l1-3.3C4.6 14.4 4 12.4 4 10.2 4 6 7.5 3 12 3z" />
				<path d="M9.4 8.4c1 2.5 3 4.5 5.5 5.5" />
			</svg>
		),
	},
	{
		href: 'mailto:hello@memento.com.ua',
		label: 'Пошта',
		icon: (
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
				<rect x="3" y="5" width="18" height="14" rx="2.5" />
				<path d="M4 7.5l8 5.5 8-5.5" />
			</svg>
		),
	},
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div aria-hidden="true" className={styles.topLine} />
			<div aria-hidden="true" className={styles.dots} />
			<div aria-hidden="true" className={`${styles.blob} mem-blob`} />

			<div className={styles.inner}>
				<div className={styles.grid}>
					<div className={styles.brand} data-reveal>
						<Link href="/" className={styles.logo}>
							<span className={styles.logoIcon} aria-hidden="true">
								<span className={styles.logoIconQr}>
									<span className={styles.logoIconDot} />
								</span>
							</span>
							<span className={styles.logoText}>MEMENTO</span>
						</Link>
						<p className={styles.brandText}>
							Сталеві QR-таблички, що зберігають пам&apos;ять про дорогих людей — у відео, фото й теплих словах.
						</p>
						<div className={styles.socials}>
							{socials.map(({ href, label, icon }) => (
								<a
									key={label}
									href={href}
									className={styles.social}
									aria-label={label}
									target={href.startsWith('http') ? '_blank' : undefined}
									rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
								>
									{icon}
								</a>
							))}
						</div>
					</div>

					<div className={styles.navCol} data-reveal style={{ '--reveal-delay': '120ms' }}>
						<div className={styles.colTitle}>Навігація</div>
						<nav className={styles.navList}>
							{nav.map(({ href, label }) => (
								<a key={href} href={href} className={styles.navLink}>{label}</a>
							))}
						</nav>
					</div>

					<div className={styles.contactsCol} data-reveal style={{ '--reveal-delay': '240ms' }}>
						<div className={styles.colTitle}>Контакти</div>
						<div className={styles.contactsList}>
							<a href="tel:+380671234567" className={styles.contactItem}>
								<span className={styles.contactIcon}>
									<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
										<path d="M5 4h3l1.5 5L7 10.5a12 12 0 0 0 6 6L14.5 14l5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
									</svg>
								</span>
								<span>
									<span className={styles.contactLabel}>Телефон · Viber · Telegram</span>
									<span className={styles.contactValue}>+380 67 123 45 67</span>
								</span>
							</a>
							<a href="mailto:hello@memento.com.ua" className={styles.contactItem}>
								<span className={styles.contactIcon}>
									<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
										<rect x="3" y="5" width="18" height="14" rx="2.5" />
										<path d="M4 7.5l8 5.5 8-5.5" />
									</svg>
								</span>
								<span>
									<span className={styles.contactLabel}>Пошта</span>
									<span className={styles.contactValue}>hello@memento.com.ua</span>
								</span>
							</a>
							<div className={styles.contactItem}>
								<span className={styles.contactIcon}>
									<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
										<path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
										<circle cx="12" cy="10" r="2.5" />
									</svg>
								</span>
								<span>
									<span className={styles.contactLabel}>Доставка</span>
									<span className={styles.contactValue}>По всій Україні · Нова Пошта</span>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.bottom} data-reveal style={{ '--reveal-delay': '300ms' }}>
					<div className={styles.bottomDivider} />
					<div className={styles.bottomRow}>
						<span className={styles.copy}>© {year} MEMENTO · Меморіальні QR-таблички</span>
						<span className={styles.domain}>memento.com.ua</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
