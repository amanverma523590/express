import express from 'express';
import path from 'path';
const app = express();

const PORT = 3002;

app.get("/",(req,resp)=>{
    let absPath = path.resolve('view/home.html');
    console.log(absPath)
    resp.sendFile(absPath)
})
app.get("/login",(req,resp)=>{
    let absPath = path.resolve('view/login.html');
    resp.sendFile(absPath)
})

app.listen(PORT);
console.log(`server workin at ${PORT}`)