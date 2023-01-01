import { useContext, useEffect, useState } from "react";

import NewComment from "./new-comment";
import CommentList from "./comment-list";
import NotificationContext from "../../store/notification-context";

const Comments = ({ eventId }) => {
	const [comments, setComments] = useState([]);
	const [showComments, setShowComments] = useState(false);
	const [isFetchingComments, setIsFetchingComments] = useState(false);

	const notifCtx = useContext(NotificationContext);

	useEffect(() => {
		if (showComments) {
			setIsFetchingComments(true);
			fetch("/api/comments/" + eventId)
				.then((response) => response.json())
				.then((data) => {
					setComments(data.comments);
					setIsFetchingComments(false);
				});
		}
	}, [showComments, eventId]);

	const toggleCommentsHandler = () => {
		setShowComments((prevStatus) => !prevStatus);
	};

	const addCommentHandler = (commentData) => {
		notifCtx.showNotification({
			title: "Sending comment...",
			message: "Your comment is currently being stored into a database.",
			status: "pending",
		});

		fetch("/api/comments/" + eventId, {
			method: "POST",
			body: JSON.stringify(commentData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.ok) return response.body;

				return response.json().then((data) => {
					throw new Error(data.message || "Something went wrong!");
				});
			})
			.then(() =>
				notifCtx.showNotification({
					title: "Success!",
					message: "Your comment was saved!",
					status: "success",
				})
			)
			.catch((error) =>
				notifCtx.showNotification({
					title: "Error!",
					message: error.message || "Something went wrong!",
					status: "error",
				})
			);
	};

	return (
		// comments
		<section className="mx-auto my-12 max-w-2xl text-center">
			<button
				onClick={toggleCommentsHandler}
				className="rounded-md font-bold py-2 px-4 bg-transparent text-[#03be9f] border border-[#03be9f] cursor-pointer hover:bg-[#03be9f] hover:text-white active:translate-y-0.5 active:duration-75"
			>
				{showComments ? "Hide" : "Show"} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && !isFetchingComments && <CommentList items={comments} />}
			{showComments && isFetchingComments && (
				<p className="font-bold text-xl text-[#03be9f]">Loading...</p>
			)}
		</section>
	);
};

export default Comments;
