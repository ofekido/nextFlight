
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const CONNECTION_STRING = "mongodb+srv://admin:1Q2W3e4r@nextflightcluster.erx3h3x.mongodb.net/?retryWrites=true&w=majority&appName=nextFlightCluster";
const DATABASE_NAME = "nextFlightDB";
let database;






app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("Mongo Db connection error:", error);
        } else {
            database = client.db(DATABASE_NAME);
            console.log("Mongo Db connection established");
        }
    });
});

app.get('/api/nextFlight/GetNotes',(request,response)=>{
    database.collection("nextFlightCollection").find({}).toArray((error, result)=>{
        response.send(result)
    })
})