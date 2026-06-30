import { cinzel, cormorant, manrope } from '@/fonts/fonts';
import 'modern-normalize/modern-normalize.css';
import '@/styles/global.scss';

export const metadata = {
	title: 'MEMENTO – Меморіальні таблички з QR-кодом',
	description:
		'Сталеві QR-таблички, що зберігають память про дорогих людей — у відео, фото й теплих словах. Виготовляємо та доставляємо по всій Україні.',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="uk"
			className={`${cinzel.variable} ${cormorant.variable} ${manrope.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
