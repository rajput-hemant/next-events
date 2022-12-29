import Button from "../ui/button";

const ResultsTitle = ({ date }) => {
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	return (
		<section className="mx-auto my-8 w-[90%] text-center">
			<h1>Events in {formattedDate}</h1>
			<Button link="/events">Show all events</Button>
		</section>
	);
};

export default ResultsTitle;
