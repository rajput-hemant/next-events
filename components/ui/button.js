import Link from "next/link";

const Button = ({ link, children }) => {
	return (
		<Link
			href={link}
			className="no-underline rounded-md border-solid cursor-pointer py-2 px-6 text-center font-bold text-white bg-[#03be9f] shadow-md shadow-gray-400  inline-flex justify-center items-center"
		>
			{children}
		</Link>
	);
};

export default Button;
