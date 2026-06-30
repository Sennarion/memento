'use client';

import { useEffect, useState } from 'react';
import { usePackage } from '@/context/package';
import CustomSelect from '@/components/ui/custom-select/custom-select';
import styles from './contact.module.scss';

const PKG_OPTIONS = [
	{ value: 'Базовий', label: 'Базовий — 1 490 ₴' },
	{ value: 'Класичний', label: 'Класичний — 2 490 ₴' },
	{ value: 'Меморіальний', label: 'Меморіальний — 3 990 ₴' },
	{ value: 'Не визначився', label: 'Ще не визначився' },
];

const PHONE_PREFIX = '+380 ';

function formatPhoneSuffix(digits) {
	const d = digits.replace(/\D/g, '').slice(0, 9);
	let out = d.slice(0, 2);
	if (d.length > 2) out += ' ' + d.slice(2, 5);
	if (d.length > 5) out += ' ' + d.slice(5, 7);
	if (d.length > 7) out += ' ' + d.slice(7, 9);
	return out;
}

function isPhoneComplete(phone) {
	return phone.replace(/\D/g, '').length === 12;
}

export default function Contact() {
	const { pkg } = usePackage();
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [selectedPkg, setSelectedPkg] = useState('');
	const [comment, setComment] = useState('');
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		if (pkg) {
			setSelectedPkg(pkg);
			setErrors((e) => ({ ...e, pkg: '' }));
		}
	}, [pkg]);

	const handlePhoneFocus = () => { if (!phone) setPhone(PHONE_PREFIX); };
	const handlePhoneBlur = () => { if (phone === PHONE_PREFIX) setPhone(''); };
	const handlePhoneChange = (e) => {
		const val = e.target.value;
		if (!val.startsWith('+')) { setPhone(PHONE_PREFIX); return; }
		const suffix = val.slice(PHONE_PREFIX.length);
		setPhone(PHONE_PREFIX + formatPhoneSuffix(suffix));
		if (errors.phone) setErrors((e) => ({ ...e, phone: '' }));
	};
	const handlePhoneKeyDown = (e) => {
		const pos = e.target.selectionStart;
		if ((e.key === 'Backspace' || e.key === 'Delete') && pos <= PHONE_PREFIX.length) {
			e.preventDefault();
		}
	};

	const validate = () => {
		const e = {};
		if (!name.trim()) e.name = 'Введіть ваше ім\'я';
		if (!phone || phone === PHONE_PREFIX) {
			e.phone = 'Введіть номер телефону';
		} else if (!isPhoneComplete(phone)) {
			e.phone = 'Невірний формат — має бути +380 ХХ ХХХ ХХ ХХ';
		}
		if (!selectedPkg) e.pkg = 'Оберіть пакет';
		return e;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errs = validate();
		if (Object.keys(errs).length > 0) {
			setErrors(errs);
			return;
		}
		setSubmitted(true);
	};

	return (
		<section className={styles.section} id="contact">
			<div aria-hidden="true" className={styles.dots} />
			<div aria-hidden="true" className={`${styles.blob1} mem-blob`} />
			<div aria-hidden="true" className={`${styles.blob2} mem-blob`} />

			<div className={styles.inner}>
				<div className={styles.left} data-reveal>
					<div className={styles.label}>
						<span className={styles.labelDot} />
						<span className={styles.labelLine} />
						Залишити заявку
					</div>
					<h2 className={styles.title}>
						Створімо вічну<br />пам&apos;ять разом
					</h2>
					<p className={styles.text}>
						Залиште контакти — ми делікатно зв&apos;яжемося, обговоримо деталі й допоможемо на кожному кроці.
					</p>
					<div className={styles.contacts}>
						<a href="tel:+380671234567" className={styles.contactItem}>
							<span className={styles.contactIcon}>📞</span>
							<span>
								<span className={styles.contactLabel}>Телефон / Viber / Telegram</span>
								<span className={styles.contactValue}>+380 67 123 45 67</span>
							</span>
						</a>
						<a href="mailto:hello@memento.com.ua" className={styles.contactItem}>
							<span className={styles.contactIcon}>✉️</span>
							<span>
								<span className={styles.contactLabel}>Пошта</span>
								<span className={styles.contactValue}>hello@memento.com.ua</span>
							</span>
						</a>
					</div>
				</div>

				<div className={styles.right} data-reveal style={{ '--reveal-delay': '180ms' }}>
					{submitted ? (
						<div className={styles.success}>
							<div className={styles.successIcon}>
								<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M5 12l5 5L19 7" />
								</svg>
							</div>
							<h3 className={styles.successTitle}>Заявку надіслано</h3>
							<p className={styles.successText}>Ми зв&apos;яжемося з вами протягом дня — делікатно й без зайвого поспіху.</p>
						</div>
					) : (
						<form className={styles.form} onSubmit={handleSubmit} noValidate>
							<div className={styles.field}>
								<label className={styles.fieldLabel} htmlFor="cf-name">Ім&apos;я</label>
								<input
									className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
									type="text"
									id="cf-name"
									name="name"
									value={name}
									onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((err) => ({ ...err, name: '' })); }}
									placeholder="Ваше ім'я"
									autoComplete="given-name"
								/>
								{errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
							</div>

							<div className={styles.field}>
								<label className={styles.fieldLabel} htmlFor="cf-phone">Телефон</label>
								<input
									className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
									type="tel"
									id="cf-phone"
									name="phone"
									value={phone}
									onChange={handlePhoneChange}
									onFocus={handlePhoneFocus}
									onBlur={handlePhoneBlur}
									onKeyDown={handlePhoneKeyDown}
									placeholder="+380 __ ___ __ __"
									autoComplete="tel"
									inputMode="numeric"
								/>
								{errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
							</div>

							<div className={styles.field}>
								<label className={styles.fieldLabel} htmlFor="cf-pkg">Пакет</label>
								<CustomSelect
									id="cf-pkg"
									options={PKG_OPTIONS}
									value={selectedPkg}
									onChange={(v) => { setSelectedPkg(v); setErrors((err) => ({ ...err, pkg: '' })); }}
									placeholder="Оберіть пакет"
									error={!!errors.pkg}
								/>
								{errors.pkg && <span className={styles.errorMsg}>{errors.pkg}</span>}
							</div>

							<div className={styles.field}>
								<label className={styles.fieldLabel} htmlFor="cf-msg">
									Коментар <span className={styles.fieldOptional}>(необов&apos;язково)</span>
								</label>
								<textarea
									className={styles.input}
									id="cf-msg"
									name="message"
									rows={3}
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									placeholder="Розкажіть трохи про вашу історію"
								/>
							</div>

							<button type="submit" className={styles.submit}>Надіслати заявку</button>
							<p className={styles.privacy}>
								Натискаючи, ви погоджуєтесь на обробку персональних даних.
							</p>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
