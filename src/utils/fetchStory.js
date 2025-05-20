import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase-config/config';

export async function fetchStory(slug) {
	const docRef = doc(db, 'stories', slug);
	const docSnap = await getDoc(docRef);

	if (!docSnap.exists()) return null;

	return docSnap.data();
}
