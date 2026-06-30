'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './custom-select.module.scss';

export default function CustomSelect({ options, value, onChange, placeholder = 'Оберіть...', id, error }) {
	const [open, setOpen] = useState(false);
	const wrapRef = useRef(null);
	const selected = options.find((o) => o.value === value);

	useEffect(() => {
		const close = (e) => {
			if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener('mousedown', close);
		return () => document.removeEventListener('mousedown', close);
	}, []);

	const handleKey = (e) => {
		if (e.key === 'Escape') setOpen(false);
	};

	return (
		<div ref={wrapRef} className={styles.wrap} onKeyDown={handleKey}>
			<button
				type="button"
				id={id}
				className={`${styles.trigger} ${open ? styles.triggerOpen : ''} ${error ? styles.triggerError : ''}`}
				onClick={() => setOpen((p) => !p)}
				aria-haspopup="listbox"
				aria-expanded={open}
			>
				<span className={selected ? styles.value : styles.placeholder}>
					{selected ? selected.label : placeholder}
				</span>
				<svg
					className={`${styles.chevron} ${open ? styles.chevronUp : ''}`}
					width="16" height="16" viewBox="0 0 24 24"
					fill="none" stroke="currentColor" strokeWidth="2"
					strokeLinecap="round" strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 9l6 6 6-6" />
				</svg>
			</button>

			{open && (
				<ul className={styles.dropdown} role="listbox">
					{options.map((opt) => {
						const active = value === opt.value;
						return (
							<li
								key={opt.value}
								role="option"
								aria-selected={active}
								className={`${styles.option} ${active ? styles.optionActive : ''}`}
								onClick={() => { onChange(opt.value); setOpen(false); }}
							>
								<span>{opt.label}</span>
								{active && (
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<path d="M5 12l5 5L19 7" />
									</svg>
								)}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
