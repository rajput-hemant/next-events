const handler = async (req, res) => {
	const eventId = req.query.eventId;

	if (req.method === "POST") {
		const { email, name, text } = req.body;

		if (
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!text ||
			text.trim() === ""
		) {
			res.status(422).json({ message: "Invalid Input!" });
			return;
		}

		const newComment = {
			id: new Date().toISOString(),
			email,
			name,
			text,
		};
		console.log(newComment);

		res.status(201).json({ message: "Comment Added.", comment: newComment });
	}

	if (req.method === "GET") {
		const DUMMY_LIST = [
			{ id: "c1", name: "hemant", text: "A first comment!" },
			{ id: "c2", name: "rajput", text: "A second comment!" },
		];

		res.status(200).json({ comments: DUMMY_LIST });
	}
};

export default handler;
