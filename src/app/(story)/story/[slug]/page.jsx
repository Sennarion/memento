import { notFound } from 'next/navigation';
import { fetchStory } from '@/utils/fetchStory';
import ErrorMessage from '@/components/error-message/error-message';
import StoryHead from '@/components/story-head/story-head';
import StoryTabs from '@/components/story-tabs/story-tabs';
import StoryAchievements from '@/components/story-achievements/story-achievements';
import StoryQuote from '@/components/story-quote/story-quote';
import StoryLinks from '@/components/story-links/story-links';
import StoryCta from '@/components/story-cta/story-cta';

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
		title: `${data.name || 'Memento'} – Історія життя людини`,
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
		return <ErrorMessage error="Ця історія ще не активована" />;
	}

	return (
		<>
			<StoryHead data={data} slug={slug} />
			<StoryTabs data={data} />
			<StoryAchievements achievements={data.achievements} />
				<StoryQuote quote={data.quote} />
		<StoryLinks links={data.links} />
			<StoryCta />
		</>
	);
}
