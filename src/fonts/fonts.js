import { Montserrat, Yeseva_One, Great_Vibes } from 'next/font/google';

export const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '700'],
	display: 'swap',
	variable: '--font-montserrat',
});

export const yeseva = Yeseva_One({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-yeseva-one',
});

export const great = Great_Vibes({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-great-vibes',
});
