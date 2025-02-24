import express,{json} from 'express';
import  {MongoClient}  from 'mongodb';
import { hash, compare } from 'bcryptjs';


const uri = "mongodb+srv://billylin1954:Cracknut4@cluster0.rrsqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const app = express();
  
app.use(express.static('public'));

// Define a route for the login function
app.get('/login', (req, res) => {
    res.redirect('/auth.html');
});
const PORT = 3005;

// Middleware to parse JSON data sent from the frontend
app.use(json());
// Route to receive data from the frontend
app.get('/user', (req, res) => {
  res.json(users)
})
app.get('/user/login', (req, res) => {
  res.json(users)
})
const users = [{"name":"1234","password":"$2b$10$RLhBdtSFsA/M97tmqZdbCeKqYS15crG1/SlNmPHOvWPp5Y3JaRnDy"}]
app.post('/user', async (req, res) => {
  try {
    const user_data=req.body
    const name = user_data.user;
    const password=user_data.password
  
    // Logging uploading file
    console.log(name);
    console.log(password)
    console.log("working")
    const hashedPassword = await hash(password, 10)
    console.log(hashedPassword)
    const user = { name: name, password: hashedPassword }
    users.push(user)
    console.log(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})
app.post('/user/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name)
  console.log("working")
  if (user == null) {
    console.log("not working")
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await compare(req.body.password, user.password)) {
      console.log("working pass")
      res.json({ message: 'pass' });
    } else {
      res.send('Not Allowed')
    }
  } catch {
 //   res.status(500).send()
  }
})

app.post('/api/data', (req, res) => {
  console.log("work")
  async function run() {
   try {
     await client.connect();
     console.log("Connected successfully to MongoDB");
     
     const database = client.db('billCo');
     const collection = database.collection('stuff');
  
     const user = receivedData.user
     const password = receivedData.password
     const type="customer";
     // Insert the document into MongoDB
     
     await collection.insertOne({ user, password ,type});
     console.log("Data inserted:", { user, password });
     console.log("working")
  
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
 
  res.json({ message: 'data received successfully', data: receivedData });
});
app.get('/api/data', async function (req, res) {
  
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const database = client.db('billCo');
    const collection = database.collection('stuff');
    
   
    const result = await collection.find().limit(400).toArray();
    console.log(result)
     
    res.send({ response:result} )
  } catch (error) {
    console.error("Error:", error);
    
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
