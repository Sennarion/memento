'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Sling as Hamburger } from 'hamburger-react';
import styles from './header.module.scss';
import Container from '../ui/container/container';
import MobileMenu from '../mobile-menu/mobile-menu';
import { BsTelephoneFill } from 'react-icons/bs';

const navItems = [
	{ title: 'головна', href: '/' },
	{ title: 'про нас', href: '/about' },
];

export default function Header() {
	const pathname = usePathname();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	useEffect(() => {
		if (isMenuOpen) {
			document.documentElement.style.overflow = 'hidden';
			return;
		}

		document.documentElement.style.overflow = 'auto';
	}, [isMenuOpen]);

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.headerContent}>
					<Link href="/" className={styles.logoWrapper}>
						<Image className={styles.logo} src="/logo.png" alt="Memento Logo" quality={100} fill />
					</Link>
					<div className={styles.navWrapper}>
						<nav className={styles.nav}>
							<ul className={styles.navList}>
								{navItems.map(({ title, href }) => (
									<li className={styles.navItem} key={title}>
										<Link
											className={classNames(styles.navLink, {
												[styles.active]: pathname === href,
											})}
											href={href}
										>
											{title}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<ul className={styles.icons}>
							<li className={styles.icon}>
								<a className={styles.iconLink} href="tel:+380990648414">
									<BsTelephoneFill />
									(099) 064 84 14
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.mobileNavWrapper}>
						<Hamburger size={20} toggled={isMenuOpen} onToggle={toggleMenu} color="#b07507" rounded />
					</div>
				</div>
			</Container>
			<MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</header>
	);
}
