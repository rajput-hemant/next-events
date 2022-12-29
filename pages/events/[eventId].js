import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";

const EventDetailPage = () => {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return (
			<ErrorAlert>
				<p>No Event Found</p>;
			</ErrorAlert>
		);
	}

	return (
		<>
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
		</>
	);
};

export default EventDetailPage;
