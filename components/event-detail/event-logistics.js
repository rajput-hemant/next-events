import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import AddressIcon from "../icons/address-icon";

function EventLogistics({ date, address, image, imageAlt }) {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const addressText = address.replace(", ", "\n");

	return (
		// logistics
		<section className="flex flex-col items-center gap-4 justify-center -my-12 mx-auto w-4/5 max-w-3xl p-2 bg-[#2b2b2b] rounded-md shadow-md md:p-8 md:-my-20 md:mx-auto md:gap-12 md:flex-row md:items-stretch">
			{/* image */}
			<div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white md:w-80 md:h-80">
				<img
					src={`/${image}`}
					alt={imageAlt}
					className="w-40 h-40 object-cover md:h-80 md:w-80"
				/>
			</div>
			{/* list */}
			<ul className="flex flex-col gap-8 justify-center items-center md:items-start">
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address className="whitespace-pre">{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export default EventLogistics;
