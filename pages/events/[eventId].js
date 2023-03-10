import Head from "next/head";

import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import Comments from "../../components/input/comments";

const EventDetailPage = ({ event }) => {
	if (!event) {
		return (
			<div className="center">
				<p>Loading...</p>;
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>{event.title}</title>
				<meta name="description" content={event.description} />
			</Head>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				image={event.image}
				imageAlt={event.title}
				address={event.location}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
			<Comments eventId={event.id} />
		</>
	);
};

export const getStaticProps = async (context) => {
	const eventId = context.params.eventId;

	const event = await getEventById(eventId);

	return {
		props: {
			event,
		},
		revalidate: 60,
	};
};

export const getStaticPaths = async () => {
	const events = await getFeaturedEvents();
	const paths = events.map((event) => ({ params: { eventId: event.id } }));

	return {
		paths,
		fallback: "blocking",
	};
};

export default EventDetailPage;
