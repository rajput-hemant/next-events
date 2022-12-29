import { useRef } from "react";
import Button from "../ui/button";

const EventsSearch = ({ onSearch }) => {
	const yearInp = useRef();
	const monthInp = useRef();

	const months = [
		{ value: 1, label: "Januray" },
		{ value: 2, label: "February" },
		{ value: 3, label: "March" },
		{ value: 4, label: "April" },
		{ value: 5, label: "May" },
		{ value: 6, label: "June" },
		{ value: 7, label: "July" },
		{ value: 8, label: "August" },
		{ value: 9, label: "September" },
		{ value: 10, label: "October" },
		{ value: 11, label: "November" },
		{ value: 12, label: "December" },
	];

	const submitHandler = (event) => {
		event.preventDefault();

		const selectedYear = yearInp.current.value;
		const selectedMonth = monthInp.current.value;

		onSearch(selectedYear, selectedMonth);
	};

	return (
		// form
		<form
			action=""
			onSubmit={submitHandler}
			className="mx-auto my-8 shadow-sm p-4 bg-white rounded-md w-1/2 max-w-[140rem] flex flex-col justify-center gap-4 md:flex-row"
		>
			{/* controls */}
			<div className="w-full flex gap-4 flex-col md:w-4/5 md:flex-row">
				{/* control */}
				<div className="flex gap-4 items-center justify-center">
					<label htmlFor="year" className="font-bold">
						Year
					</label>
					<select
						ref={yearInp}
						id="year"
						className="bg-white border border-black rounded-md w-[70%] p-1 md:w-full"
					>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
					</select>
				</div>
				{/* control */}
				<div className="flex gap-4 items-center justify-center">
					<label htmlFor="month" className="font-bold">
						Month
					</label>
					<select
						ref={monthInp}
						id="month"
						className="bg-white border border-black rounded-md w-[70%] p-1 md:w-full"
					>
						{months.map((month) => (
							<option value={month.value}>{month.label}</option>
						))}
					</select>
				</div>
			</div>
			<Button onClick={() => {}}>Find Events</Button>
		</form>
	);
};

export default EventsSearch;
