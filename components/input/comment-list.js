const CommentList = ({ items }) => {
	return (
		// comments
		<ul className="flex flex-col gap-4">
			{items.map((item) => (
				<li key={item._id} className="py-2 border-b-2 border-[#ccc] text-left	">
					<p className="m-0">{item.text}</p>
					<div className="text-right font-bold italic">
						By <address className="inline">{item.name}</address>
					</div>
				</li>
			))}
		</ul>
	);
};

export default CommentList;
