import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "myDataBase";

const app = express();
const PORT = 3002;
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json())

const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db(dbName);

  app.get("/api", async (req, resp) => {
    const collection = db.collection("employee");
    const result = await collection.find().toArray();
    resp.send(result);
  });
  app.get("/ui", async (req, resp) => {
    const collection = db.collection("employee");
    const result = await collection.find().toArray();
    resp.render("myDataBase", { result });
  });
  app.get("/add", (req, resp) => {
    resp.render('form');
  });
  app.post("/add-student",async(req,resp)=>{
    // console.log(req.body);
    const collection = db.collection("employee");
    const result = await collection.insertOne(req.body);
    console.log(result)
    resp.send("Data Saved")
  })

  app.post("/add-student-api",async(req,resp)=>{
    console.log(req.body)

    const collection = db.collection("employee");
    const result = await collection.insertOne(req.body)
    resp.send({"message":result})
  })
  app.delete("/delete/:id",async(req,resp)=>{
    console.log(req.params.id)
    const collection = db.collection("employee");
    const result = await collection.deleteOne({_id: new ObjectId(req.params.id)});
    if(result){
      resp.send({
        message : "Data Deleted .....",
        success : true
      })
    }else{
      resp.send({
        message : "Data Not Deleted.....",
        success : false
      })
    }
  })


});

app.listen(PORT);
console.log(`running at ${PORT}`);
