'use client';

import { useState } from 'react';
import faqData from '@/data/faq.json';
import styles from './faq.module.scss';

export default function Faq() {
	const [open, setOpen] = useState(0);

	return (
		<section className={styles.section} id="faq">
			<div aria-hidden="true" className={`${styles.blob} mem-blob`} />

			<div className={styles.inner}>
				<div className={styles.head} data-reveal>
					<div className={styles.diamond} aria-hidden="true" />
					<div className={styles.label}>
						<span className={styles.labelLine} />
						Питання та відповіді
						<span className={styles.labelLine} />
					</div>
					<h2 className={styles.title}>Що варто знати</h2>
				</div>

				<div className={styles.list}>
					{faqData.map(({ q, a }, idx) => {
						const num = String(idx + 1).padStart(2, '0');
						const isOpen = open === idx;
						return (
							<div key={idx} data-reveal style={{ '--reveal-delay': `${idx * 60}ms` }}>
						<div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
								<button
									className={styles.question}
									onClick={() => setOpen(isOpen ? null : idx)}
									aria-expanded={isOpen}
								>
									<span className={styles.questionInner}>
										<span className={styles.questionNum}>{num}</span>
										<span className={styles.questionText}>{q}</span>
									</span>
									<span className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ''}`} aria-hidden="true">+</span>
								</button>
								<div className={styles.answer}>
									<div className={styles.answerInner}>
										<p className={styles.answerText}>{a}</p>
									</div>
								</div>
							</div>
						</div>
						);
					})}
				</div>

				<div className={styles.footer} data-reveal>
					Не знайшли відповідь?{' '}
					<a href="#contact" className={styles.footerLink}>
						Напишіть нам — відповімо делікатно →
					</a>
				</div>
			</div>
		</section>
	);
}
