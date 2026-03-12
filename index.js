import express from 'express';
import path from "path"
const app = express();

const publicPath = path.resolve("view/form.html")

const PORT = 3002;
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get("/",(req,resp)=>{
    resp.send("sup")
})

app.get("/login",(req,resp)=>{
    resp.sendFile(publicPath)
})
app.post("/submit",(req,resp)=>{
    resp.send("This is submit page")
    console.log(req.body)
})
app.get("/users",(req,resp)=>{
    resp.send("This is users page")
})

app.listen(PORT);
console.log(`running at ${PORT}`)