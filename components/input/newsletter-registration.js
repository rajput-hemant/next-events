import { useRef } from "react";

const NewsletterRegistration = () => {
	const emailInputRef = useRef();

	const registrationHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;

		fetch("/api/newsletter", {
			method: "POST",
			body: JSON.stringify({ email: enteredEmail }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		// newsletter
		<section className="my-8 mx-auto max-w-xs">
			<h2 className="m-2 text-center font-bold">Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				{/* control */}
				<div className="flex">
					<input
						type="email"
						id="email"
						placeholder="Your email"
						aria-label="Your email"
						ref={emailInputRef}
						className="p-1 border border-gray-400 rounded-md rounded-r-none"
					/>
					<button className="px-4 py-2 bg-[#03be9f] font-bold rounded-md text-white rounded-l-none cursor-pointer hover:bg-[#02afa1]">
						Register
					</button>
				</div>
			</form>
		</section>
	);
};

export default NewsletterRegistration;
