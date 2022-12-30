import { useRouter } from "next/router";

import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = ({ events }) => {
	const router = useRouter();

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

export const getStaticProps = async () => {
	const events = await getAllEvents();

	return {
		props: {
			events,
		},
		revalidate: 60,
	};
};

export default AllEventsPage;
