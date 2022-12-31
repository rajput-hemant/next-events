import { useEffect, useState } from "react";

import NewComment from "./new-comment";
import CommentList from "./comment-list";

const Comments = ({ eventId }) => {
	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (showComments) {
			fetch("/api/comments/" + eventId)
				.then((response) => response.json())
				.then((data) => {
					setComments(data.comments);
				});
		}
	}, [showComments]);

	const toggleCommentsHandler = () => {
		setShowComments((prevStatus) => !prevStatus);
	};

	const addCommentHandler = (commentData) => {
		fetch("/api/comments/" + eventId, {
			method: "POST",
			body: JSON.stringify(commentData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		// comments
		<section className="mx-auto my-12 max-w-2xl">
			<button
				onClick={toggleCommentsHandler}
				className="rounded-md font-bold py-2 px-4 bg-transparent text-[#03be9f] border border-[#03be9f] cursor-pointer hover:bg-[#03be9f] hover:text-white active:translate-y-0.5 active:duration-75"
			>
				{showComments ? "Hide" : "Show"} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList items={comments} />}
		</section>
	);
};

export default Comments;
