import Image from 'next/image';
import { notFound } from 'next/navigation';
import { fetchStory } from '@/utils/fetchStory';
import NoStory from '@/components/no-story/no-story';
import StoryHead from '@/components/story-head/story-head';
import StoryVideo from '@/components/story-video/story-video';
import StoryQuote from '@/components/story-quote/story-quote';
import StorySlider from '@/components/story-slider/story-slider';
import StoryBiography from '@/components/story-biography/story-biography';

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const data = await fetchStory(slug);

	if (!data) {
		return {
			title: 'Сторінку не знайдено – Memento',
			description: 'На жаль, ця меморіальна сторінка не існує.',
		};
	}

	return {
		title: `${data.name.text || 'Memento'} – Історія життя людини`,
		description:
			'Memento – сучасний спосіб вшанувати памʼять про близьких. Меморіальні таблички з QR-кодами ведуть до цифрових сторінок із фото, історією життя та спогадами.',
	};
}

export default async function StoryPage({ params }) {
	const { slug } = await params;
	const data = await fetchStory(slug);

	if (!data) {
		notFound();
	}

	if (!data.info.activated) {
		return <NoStory />;
	}

	return (
		<>
			<StoryHead data={data} />
			<StoryVideo video={data.video} />
			<StoryQuote quote={data.quote} />
			<StorySlider photos={data.photos} />
			<StoryBiography biography={data.biography} />
		</>
	);
}
