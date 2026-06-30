import { Cinzel, Cormorant_Garamond, Manrope, Yeseva_One } from 'next/font/google';

export const cinzel = Cinzel({
	subsets: ['latin'],
	weight: ['500', '600'],
	display: 'swap',
	variable: '--font-cinzel',
});

export const cormorant = Cormorant_Garamond({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-cormorant',
});

export const manrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-manrope',
});

export const yeseva = Yeseva_One({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-yeseva-one',
});
