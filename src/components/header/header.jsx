'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import navItems from '@/data/nav.json';
import styles from './header.module.scss';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const navIds = navItems.map(({ href }) => href.replace('#', ''));
		const allIds = [...navIds, 'contact'];
		const sections = allIds.map((id) => document.getElementById(id)).filter(Boolean);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = '#' + entry.target.id;
						setActiveSection(navIds.includes(entry.target.id) ? id : '');
					}
				});
			},
			{ rootMargin: '-30% 0px -65% 0px', threshold: 0 }
		);

		sections.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [menuOpen]);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.inner}>
					<Link href="/" className={styles.logo}>
						<span className={styles.logoIcon} aria-hidden="true">
							<span className={styles.logoIconBorder} />
							<span className={styles.logoIconQr}>
								<span className={styles.logoIconDot} />
							</span>
						</span>
						<span className={styles.logoText}>MEMENTO</span>
					</Link>

					<nav className={styles.nav} aria-label="Навігація">
						{navItems.map(({ title, href }) => (
							<a
								key={href}
								href={href}
								className={`${styles.navLink} ${activeSection === href ? styles.active : ''}`}
							>
								{title}
							</a>
						))}
					</nav>

					<a href="#contact" className={styles.cta}>Залишити заявку</a>

					<button
						className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
						onClick={() => setMenuOpen((p) => !p)}
						aria-label="Меню"
						aria-expanded={menuOpen}
					>
						<span /><span /><span />
					</button>
				</div>
			</header>

			<div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
				<nav className={styles.mobileNav}>
					{navItems.map(({ title, href }) => (
						<a
							key={href}
							href={href}
							className={`${styles.mobileNavLink} ${activeSection === href ? styles.active : ''}`}
							onClick={() => setMenuOpen(false)}
						>
							{title}
						</a>
					))}
				</nav>
				<a href="#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
					Залишити заявку
				</a>
			</div>
		</>
	);
}
