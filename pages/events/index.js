import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const AllEventsPage = () => {
	const router = useRouter();
	const events = getAllEvents();

	const findEvent = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};

	return (
		<>
			<EventsSearch onSearch={findEvent} />
			<EventList items={events} />
		</>
	);
};

export default AllEventsPage;
