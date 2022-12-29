import Head from "next/head";

import EventList from "../components/events/event-list";

import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
	const featuredEvents = getFeaturedEvents();

	return (
		<>
			<Head>
				<title>Next Events</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<EventList items={featuredEvents} />
			</div>
		</>
	);
}
