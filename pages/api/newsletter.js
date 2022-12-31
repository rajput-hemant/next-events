import { connectDB, insertDocument } from "../../helpers/db-utils";

const handler = async (req, res) => {
	if (req.method === "POST") {
		const email = req.body.email;

		if (!email || !email.includes("@")) {
			res.status(422).json({ message: "Invalid email address." });
			return;
		}

		// Store it in a database
		let client;
		try {
			client = await connectDB();
		} catch (error) {
			res.status(500).json({ message: "Connecting to the database failed!" });
			return;
		}
		try {
			await insertDocument(client, "newsletter", { email: email });
			client.close();
		} catch (error) {
			res.status(500).json({ message: "Inserting data failed!" });
			return;
		}

		res.status(201).json({ message: "Signed up!" });
		console.log(email);
	}
};

export default handler;
