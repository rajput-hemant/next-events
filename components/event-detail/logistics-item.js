const LogisticsItem = ({ icon: Icon, children }) => {
	return (
		// item
		<li className="flex flex-col text-2xl items-center text-center text-[#aefff8] md:items-start md:text-left">
			{/* icon */}
			<span className="block mr-4 text-[#18e0d0]">
				<Icon className="w-8 h-8" />
			</span>
			{/* content */}
			<span className="block">{children}</span>
		</li>
	);
};

export default LogisticsItem;
