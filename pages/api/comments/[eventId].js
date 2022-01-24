import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://Chisom:AhNQ9ZWDzfW3vc7@cluster0.w1dc5.mongodb.net/events?retryWrites=true&w=majority"
  );

  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      name.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);
    console.log(result);
    newComment.id = result.insertedId;
    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "d1",
        name: "Chisom",
        text: "A first comment",
      },
      {
        id: "d2",
        name: "Jerry",
        text: "A second comment",
      },
    ];
    res.status(200).json({ comments: dummyList });
  }

  client.close();
}

export default handler;
