import express,{json} from 'express';
import  {MongoClient}  from 'mongodb';
const uri = "mongodb+srv://billylin1954:Cracknut4@cluster0.rrsqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const app = express();
//const { readFile } = promises;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the login function
app.get('/login', (req, res) => {
    res.redirect('/auth.html');
});
const PORT = 3005;

// Middleware to parse JSON data sent from the frontend
app.use(json());
// Route to receive data from the frontend
app.post('/api/data', (req, res) => {
  async function run() {
   try {
     await client.connect();
     console.log("Connected successfully to MongoDB");
  
     const database = client.db('billCo');
     const collection = database.collection('stuff');
  
     const user = receivedData.user
     const password = receivedData.password
     // Insert the document into MongoDB
    

       await collection.insertOne({ user, password });
       console.log("Data inserted:", { user, password });
     
  
  
   } catch (error) {
     console.error("Error:", error);
   } finally {
     await client.close();
     console.log("Connection closed.");
   }
  }
  const receivedData = req.body;
  console.log('Data received from frontend:', receivedData);

  
  
  run()
 
  res.json({ message: 'Data received successfully', data: receivedData });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
