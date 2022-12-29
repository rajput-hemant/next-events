import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({ title, image, date, location, id }) => {
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replace(", ", "\n");

	const explorerLink = `/events/${id}`;

	return (
		// item
		<li className="bg-white m-4 flex flex-col gap-4 rounded-lg overflow-hidden shadow-lg md:flex-row">
			<img
				src={"/" + image}
				alt={title}
				className="w-full object-cover md:w-2/5 md:h-56"
			/>
			{/* content */}
			<div className="w-full py-4 text-center md:w-3/5 md:p-0 md:text-left">
				{/* summary */}
				<div>
					<h2 className="font-bold text-2xl md:my-4">{title}</h2>
					{/* date */}
					<div className="flex gap-2 items-center">
						<DateIcon className="w-5 h-5 text-gray-700 mr-2" />
						<time className="font-bold text-gray-700">{formattedDate}</time>
					</div>
					{/* address */}
					<div className="flex gap-2 items-center">
						<AddressIcon className="w-5 h-5 mr-2 text-gray-700" />
						<address className="my-2 text-gray-700 whitespace-pre">
							{formattedAddress}
						</address>
					</div>
				</div>
				{/* actions */}
				<div className="flex flex-col p-4 md:flex-row md:justify-end">
					<Button link={explorerLink}>
						Explore Event
						<ArrowRightIcon className="w-5 h-5 ml-2" />
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
