import express from 'express';
import path from 'path';
const app = express();

const PORT = 3002;
const absPath = path.resolve("view")
const publicPath = path.resolve("Public")

app.use(express.static(publicPath))

app.get("/",(req,resp)=>{
    resp.sendFile(absPath+"/home.html")
})
app.get("/login",(req,resp)=>{
    resp.sendFile(absPath+"/login.html")
})
app.get("/about",(req,resp)=>{
    resp.sendFile(absPath+"/about.html")
})

app.use((req,resp)=>{
    resp.status(404).sendFile(absPath+"/404.html");
})

app.listen(PORT);
console.log(`server workin at ${PORT}`)