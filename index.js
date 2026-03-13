import express from 'express';
import userData from "./users.json" with {type:"json"}

const app = express();
const PORT = 3002;

app.get("/",(req,resp)=>{
    resp.send(userData)
})
app.get("/user/:id",(req,resp)=>{
    const id = req.params.id;
    let filterData = userData.filter((user)=>user.id==id)
    resp.send(filterData)
    console.log(id)
})

app.get("/username/:name",(req,resp)=>{
    const name = req.params.name;
    let filterData = userData.filter((user)=>user.name.toLowerCase()==name.toLowerCase());
    resp.send(filterData);
    console.log(name)
})

app.listen(PORT);
console.log(`listening at ${PORT}`);