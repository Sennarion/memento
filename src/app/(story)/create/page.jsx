import { NextResponse } from 'next/server';
import { db } from '@/firebase-config/config';
import { doc, setDoc } from 'firebase/firestore';

export default async function Create() {
	return NextResponse.json({ status: 'ok', message: 'Document updated' });
}
