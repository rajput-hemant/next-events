const ErrorAlert = ({ children }) => {
	return (
		<div className="mx-auto my-4 px-8 py-4 w-[90%] max-w-2xl bg-gray-300 font-bold text-2xl text-center rounded-md">
			{children}
		</div>
	);
};

export default ErrorAlert;
