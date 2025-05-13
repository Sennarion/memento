import { notFound } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase-config/config';

export default async function StoryPage({ params }) {
	const { slug } = await params;

	const docRef = doc(db, 'stories', slug);
	const docSnap = await getDoc(docRef);

	if (!docSnap.exists()) {
		notFound();
	}

	const { name } = docSnap.data();

	return (
		<div>
			<h1>Story: {slug}</h1>
			<p>{name}</p>
		</div>
	);
}
