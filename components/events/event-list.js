import EventItem from "./event-item";

const EventList = ({ items }) => {
	return (
		// list
		<ul className="w-9/10 max-w-3xl my-20 mx-auto">
			{items.map((event) => (
				<EventItem
					key={event.id}
					id={event.id}
					title={event.title}
					location={event.location}
					date={event.date}
					image={event.image}
				/>
			))}
		</ul>
	);
};

export default EventList;
