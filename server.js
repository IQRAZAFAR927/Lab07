const express = require('express')
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
const port = 3000
dotenv.config()

const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB")
    }catch (error){
        throw error
    }
};
mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected!")
})
mongoose.connection.on("connected", ()=>{
    console.log("MongoDB  connected!")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
})

app.get('/todos', (req, res) => {
    res.send('A list of todo items will be returned')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Posting a Request')
})