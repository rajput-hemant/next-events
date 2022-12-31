import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import NewsletterRegistration from "../components/input/newsletter-registration";

const Home = ({ featuredEvents }) => {
	return (
		<>
			<NewsletterRegistration />
			<EventList items={featuredEvents} />
		</>
	);
};

export const getStaticProps = async () => {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			featuredEvents: featuredEvents,
		},
		revalidate: 1800,
	};
};

export default Home;
