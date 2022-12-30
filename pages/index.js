import Head from "next/head";

import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const Home = ({ featuredEvents }) => {
	return (
		<>
			<Head>
				<title>Next Events</title>
				<meta
					name="description"
					content="Practice project for NextJS course by Academind"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<EventList items={featuredEvents} />
			</div>
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
