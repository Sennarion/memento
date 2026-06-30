'use client';

import { useState } from 'react';
import StoryVideo from '@/components/story-video/story-video';
import StoryGallery from '@/components/story-gallery/story-gallery';
import StoryBiography from '@/components/story-biography/story-biography';
import styles from './story-tabs.module.scss';

const tabs = [
	{ id: 'video', label: 'Відеоспогад' },
	{ id: 'biography', label: 'Біографія' },
	{ id: 'gallery', label: 'Галерея' },
];

export default function StoryTabs({ data }) {
	const [activeTab, setActiveTab] = useState('video');

	const renderContent = () => {
		switch (activeTab) {
			case 'video': return <StoryVideo video={data.video} />;
			case 'gallery': return <StoryGallery photos={data.photos} />;
			case 'biography': return <StoryBiography biography={data.biography} />;
			default: return null;
		}
	};

	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.inner}>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
							onClick={() => setActiveTab(tab.id)}
							type="button"
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>
			<div>{renderContent()}</div>
		</>
	);
}
