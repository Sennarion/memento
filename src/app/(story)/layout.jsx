import { montserrat } from '@/fonts/fonts';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import 'modern-normalize/modern-normalize.css';
import '@/styles/global.scss';

export const metadata = {
	title: 'Memento – Збережіть памʼять про людину',
	description:
		'Memento – сучасний спосіб вшанувати памʼять про близьких. Виготовляємо меморіальні таблички з QR-кодами, що ведуть до цифрових сторінок із фото, історією життя та спогадами. Збережіть памʼять назавжди.',
};

export default function RootLayout({ children }) {
	return <main className="main">{children}</main>;
}
