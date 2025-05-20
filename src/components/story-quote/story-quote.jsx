import classNames from 'classnames';
import Section from '../ui/section/section';
import Container from '../ui/container/container';
import { great } from '@/fonts/fonts';
import styles from './story-quote.module.scss';

export default function StoryQuote({ quote }) {
	return (
		<Section>
			<Container>
				<h2 className={classNames(great.className, styles.text)}>{quote.text}</h2>
				<p className={styles.author}>{quote.author}</p>
			</Container>
		</Section>
	);
}
