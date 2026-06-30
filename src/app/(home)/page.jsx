import Hero from '@/components/hero/hero';
import Steps from '@/components/steps/steps';
import Benefits from '@/components/benefits/benefits';
import Demo from '@/components/demo/demo';
import Pricing from '@/components/pricing/pricing';
import Reviews from '@/components/reviews/reviews';
import Faq from '@/components/faq/faq';
import Contact from '@/components/contact/contact';

export default function Home() {
	return (
		<>
			<Hero />
			<Steps />
			<Benefits />
			<Demo />
			<Pricing />
			<Reviews />
			<Contact />
			<Faq />
		</>
	);
}
