function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !test ||
      name.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      id: Math.random(),
      email,
      name,
      text,
    };
    console.log(newComment);
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
        id: "d1",
        name: "Jerry",
        text: "A second comment",
      },
    ];
    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
