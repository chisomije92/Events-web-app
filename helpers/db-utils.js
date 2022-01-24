import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Chisom:AhNQ9ZWDzfW3vc7@cluster0.w1dc5.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, doc) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(doc);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
