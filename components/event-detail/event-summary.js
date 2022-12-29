const EventSummary = ({ title }) => {
	return (
		// summary
		<section className="w-full h-[30vh] bg-gradient-to-bl from-[#008b79] to-[#1180a1]">
			<h1 className="m-0 pt-12 text-5xl text-center text-white md:text-[5rem]">
				{title}
			</h1>
		</section>
	);
};

export default EventSummary;
