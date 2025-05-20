import { montserrat } from '@/fonts/fonts';
import 'modern-normalize/modern-normalize.css';
import '@/styles/global.scss';

export const metadata = {
	title: 'Memento – Збережіть памʼять про людину',
	description:
		'Memento – сучасний спосіб вшанувати памʼять про близьких. Виготовляємо меморіальні таблички з QR-кодами, що ведуть до цифрових сторінок із фото, історією життя та спогадами. Збережіть памʼять назавжди.',
};

export default function RootLayout({ children }) {
	return (
		<html className={montserrat.className} lang="uk">
			<body>
				<main className="main">{children}</main>
			</body>
		</html>
	);
}
