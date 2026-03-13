import express from "express";
import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "myDataBase";

const app = express();
const PORT = 3002;
app.set("view engine","ejs")

const client = new MongoClient(url);

client.connect().then((connection)=>{
    const db = connection.db(dbName);

    app.get("/api", async(req,resp)=>{
        const collection = db.collection("employee")
        const result = await collection.find().toArray();
        resp.send(result);
    })
    app.get("/ui",async(req,resp)=>{
        const collection = db.collection("employee")
        const result = await collection.find().toArray();
        resp.render("myDataBase",{result})
    })
})

app.listen(PORT);
console.log(`running at ${PORT}`)