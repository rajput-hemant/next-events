import { useRef, useState } from "react";

const NewComment = ({ onAddComment }) => {
	const [isInvalid, setIsInvalid] = useState(false);

	const emailInputRef = useRef();
	const nameInputRef = useRef();
	const commentInputRef = useRef();

	const sendCommentHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredName = nameInputRef.current.value;
		const enteredComment = commentInputRef.current.value;

		if (
			!enteredEmail ||
			enteredEmail.trim() === "" ||
			!enteredEmail.includes("@") ||
			!enteredName ||
			enteredName.trim() === "" ||
			!enteredComment ||
			enteredComment.trim() === ""
		) {
			setIsInvalid(true);
			return;
		}

		onAddComment({
			email: enteredEmail,
			name: enteredName,
			text: enteredComment,
		});
	};

	const controlClass = "mb-2 flex-grow";
	const labelClass = "block font-bold mb-2 text-white text-left";
	const inputClass = "p-1 rounded-md border border-[#ccc] w-full bg-[#dcfff9]";

	return (
		// form
		<form
			onSubmit={sendCommentHandler}
			className="my-8 mx-auto w-full rounded-md bg-[#03be9f] p-4 shadow-md"
		>
			{/* row */}
			<div className="flex gap-4 flex-wrap">
				{/* controls */}
				<div className={controlClass}>
					<label htmlFor="email" className={labelClass}>
						Your email
					</label>
					<input
						type="email"
						id="email"
						ref={emailInputRef}
						className={inputClass}
					/>
				</div>
				<div className={controlClass}>
					<label htmlFor="name" className={labelClass}>
						Your name
					</label>
					<input
						type="text"
						id="name"
						ref={nameInputRef}
						className={inputClass}
					/>
				</div>
			</div>
			<div className={controlClass}>
				<label htmlFor="comment" className={labelClass}>
					Your comment
				</label>
				<textarea
					id="comment"
					rows="5"
					ref={commentInputRef}
					className={inputClass}
				></textarea>
			</div>
			{isInvalid && <p>Please enter a valid email address and comment!</p>}
			<button className="rounded-md font-bold py-2 px-4 bg-[#dcfff9] text-[#03be9f] border border-[#03be9f] cursor-pointer active:translate-y-0.5 active:duration-75">
				Submit
			</button>
		</form>
	);
};

export default NewComment;
