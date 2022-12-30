import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/ui/error-alert";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";

const FilteredEvents = ({ date, events, hasError }) => {
	if (hasError) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid filter. Please adjust your values!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const filteredEvents = events;

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const featuredEventDate = new Date(date.year, date.month - 1);

	return (
		<>
			<ResultsTitle date={featuredEventDate} />
			<EventList items={filteredEvents} />
		</>
	);
};

export const getServerSideProps = async (context) => {
	const { params } = context;

	const filterData = params.slug;

	if (!filterData) {
		return <p className="center">Loading...</p>;
	}

	const year = +filterData[0];
	const month = +filterData[1];

	if (
		isNaN(year) ||
		isNaN(month) ||
		year > 2030 ||
		year < 2021 ||
		month < 1 ||
		month > 12
	) {
		return {
			props: { hasError: true },
			// notFound: true,
			// redirect: {
			// 	destination: "/error",
			// },
		};
	}

	const filteredEvents = await getFilteredEvents({
		year,
		month,
	});

	return {
		props: {
			events: filteredEvents,
			date: {
				year,
				month,
			},
		},
	};
};

export default FilteredEvents;
