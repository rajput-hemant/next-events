import {
	connectDB,
	insertDocument,
	getAllDocuments,
} from "../../../helpers/db-utils";

const handler = async (req, res) => {
	const eventId = req.query.eventId;

	// Store it in a database
	let client;
	try {
		client = await connectDB();
	} catch (error) {
		res.status(500).json({ message: "Connecting to the database failed!" });
	}

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
			client.close();
			return;
		}

		const newComment = {
			eventId,
			email,
			name,
			text,
		};

		let result;
		try {
			result = await insertDocument(client, "comments", newComment);
			newComment._id = result.insertedId;
			res.status(201).json({ message: "Comment Added.", comment: newComment });
		} catch (error) {
			res.status(500).json({ message: "Inserting data failed!" });
		}
	}

	if (req.method === "GET") {
		try {
			const documents = await getAllDocuments(client, "comments", { _id: -1 });
			res.status(200).json({ comments: documents });
		} catch (error) {
			res.status(500).json({ message: "Getting comments failed!" });
		}
	}

	client.close();
};

export default handler;
