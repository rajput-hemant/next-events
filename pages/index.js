import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const Home = ({ featuredEvents }) => {
	return (
		<>
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
