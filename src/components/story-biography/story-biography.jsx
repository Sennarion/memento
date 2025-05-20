import classNames from 'classnames';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import { yeseva } from '@/fonts/fonts';
import styles from './story-biography.module.scss';

export default function StoryBiography({ biography }) {
	return (
		<Section>
			<Container>
				<h2 className={classNames(yeseva.className, styles.mainTitle)}>{biography.title}</h2>
				<ul className={styles.list}>
					{biography.sections.map(({ section, text }) => (
						<li className={styles.item} key={section}>
							<div className={styles.content}>
								{section && <h2 className={classNames(yeseva.className, styles.title)}>{section}</h2>}
								{text.map((paragraph, index) => (
									<p className={styles.text} key={index}>
										{paragraph}
									</p>
								))}
							</div>
						</li>
					))}
				</ul>
			</Container>
		</Section>
	);
}

import { NextResponse } from 'next/server';
import { db } from '@/firebase-config/config';
import { doc, setDoc } from 'firebase/firestore';

export default async function Create() {
	const docRef = doc(db, 'stories', 'o0NoCv3u0uY4wLnmKVJF');

	await setDoc(docRef, {
		info: {
			createdAt: new Date().toISOString(),
		},
		template: {
			name: 'memorial-default',
		},
		name: { text: 'Меггі Сміт' },
		mainPhoto: {
			url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F1.jpeg?alt=media&token=f841f6e7-c007-4354-993d-c1b642e2c942',
			description: 'Меггі Сміт',
		},
		yearsOfLife: { birthday: '28 грудня 1934 р.', death: '27 вересня 2024 р.' },
		quote: {
			text: 'Її талант сяяв яскраво, залишаючи незабутній слід у серцях глядачів',
			author: 'З глибокою любов’ю та вічною пам’яттю від усіх, хто її знав',
		},
		banner: {
			url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2Fbanner.jpg?alt=media&token=cda1d5d9-186c-48cc-a878-e82f42fb59b2',
			description: '',
		},
		photos: [
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F1.jpeg?alt=media&token=f841f6e7-c007-4354-993d-c1b642e2c942',
				description: 'Меггі Сміт',
				date: '',
			},
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F2.jpg?alt=media&token=0cb7406e-3053-4cca-8415-47a7b8504d8c',
				description: 'Меггі Сміт',
				date: '',
			},
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F3.jpeg?alt=media&token=2779195d-f320-4b5a-96d1-322196649525',
				description: 'Меггі Сміт',
				date: '',
			},
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F4.jpg?alt=media&token=6c1948f1-b332-4afe-b3f8-18801c2e0429',
				description: 'Меггі Сміт',
				date: '',
			},
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F5.jpeg?alt=media&token=bec6cab7-d589-4ed9-b90e-6ec4e23862a2',
				description: 'Меггі Сміт',
				date: '',
			},
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F6.jpeg?alt=media&token=c380f0c3-ec83-4922-9423-8ae729f02ecc',
				description: 'Меггі Сміт',
				date: '',
			},
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F7.jpeg?alt=media&token=6406bf98-178e-45de-af1d-8510cc8811be',
				description: 'Меггі Сміт',
				date: '',
			},
			{
				url: 'https://firebasestorage.googleapis.com/v0/b/memento-19f7b.firebasestorage.app/o/o0NoCv3u0uY4wLnmKVJF%2F8.jpg?alt=media&token=bcc8bc1c-7556-4cad-a333-9de02977fbab',
				description: 'Меггі Сміт',
				date: '',
			},
		],
		video: {
			title: 'Перегляньте відеоспогад про Меггі Сміт',
			url: 'https://youtu.be/F9OfaPFW0sE',
			text: '',
			poster: '',
		},
		biography: {
			title: 'Коротка історія життя Меггі Сміт',
			sections: [
				{
					section: 'Ранні роки',
					text: [
						'Меггі Сміт, повне ім’я — Дама Марґарет Наталі Сміт, народилася 28 грудня 1934 року в Ілінгу, західному районі Лондона, Англія. Її батько був патологом, а мати — домогосподаркою зі шотландським корінням.',
						'Вона з дитинства проявляла інтерес до театру та мистецтва. Освіту здобувала в Оксфордській школі для дівчат, після чого продовжила навчання акторській майстерності в Оксфордському театрі.',
					],
				},
				{
					section: 'Початок кар’єри',
					text: [
						'Акторський дебют Меггі Сміт відбувся у 1952 році в Оксфордському університетському театрі. У 1956 році вона дебютувала на сцені Вест-Енду, а згодом приєдналася до Королівського національного театру та Королівської шекспірівської компанії. У 1969 році отримала свій перший "Оскар" за головну роль у фільмі "The Prime of Miss Jean Brodie".',
					],
				},
				{
					section: 'Світове визнання',
					text: [
						`Протягом десятиліть Меггі Сміт стала однією з найшанованіших акторок Великобританії. Вона знімалась у понад 60 фільмах і десятках театральних постановок. Її ролі у таких фільмах, як "Готель "Меріголд"" та "Сестро, дій!" зміцнили її статус улюблениці публіки. Однак найширше визнання вона отримала завдяки ролі професорки Мінерви Макґонеґел у фільмах про Гаррі Поттера, а також як Вайолет Кроулі в серіалі "Абатство Даунтон".`,
					],
				},
				{
					section: 'Нагороди та досягнення',
					text: [
						`Меггі Сміт є володаркою численних престижних нагород: двох премій "Оскар", чотирьох "Еммі", трьох "Золотих глобусів", семи BAFTA та Тоні. У 1990 році вона була удостоєна титулу Дами-Британки за заслуги перед мистецтвом. Її внесок у театр, кіно та телебачення вважається неоціненним.`,
					],
				},
				{
					section: 'Спадщина',
					text: [
						`Меггі Сміт залишила глибокий слід у світовому кінематографі та театрі. Її харизма, іронічний гумор, неймовірна емоційна глибина і майстерність створення образів стали джерелом натхнення для поколінь акторів. Її роботи досі вивчають в театральних школах, а глядачі по всьому світу з вдячністю згадують її ролі, що викликали і сміх, і сльози. Її ім’я стало синонімом елегантності, таланту та витонченості.`,
					],
				},
			],
		},
	});

	return NextResponse.json({ status: 'ok', message: 'Document updated' });
}

