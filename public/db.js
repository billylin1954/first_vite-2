import { MongoClient } from "mongodb";

const uri = "mongodb+srv://billylin1954:Cracknut4@cluster0.rrsqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

export async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // Get database and collection
    const database = client.db('billCo');
    const collection = database.collection('stuff');

    // Get input values from the HTML elements
    const user = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Insert the document into MongoDB
    await collection.insertOne({ user, password });
    console.log("Data inserted:", { user, password });

    // Retrieve a sample document (optional)
    const movie = await collection.findOne({ title: "testing" });
    console.log("Found document:", movie);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}