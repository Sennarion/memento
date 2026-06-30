'use server';

import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '@/firebase-config/config';

export async function incrementVisits(slug) {
	const docRef = doc(db, 'stories', slug);
	await updateDoc(docRef, { visits: increment(1) });
}

export async function incrementCandles(slug) {
	const docRef = doc(db, 'stories', slug);
	await updateDoc(docRef, { candles: increment(1) });
}
