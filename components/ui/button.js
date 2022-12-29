import Link from "next/link";

const Button = ({ link, onClick, children }) => {
	const classes =
		"no-underline rounded-md border-solid cursor-pointer py-2 px-6 text-center font-bold text-white bg-[#03be9f] shadow-md shadow-gray-400  inline-flex justify-center items-center";

	if (link)
		return (
			<Link href={link} className={classes}>
				{children}
			</Link>
		);

	return (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
