import express from "express"

const app = express();
const PORT = 3002;

app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs")

app.get("/add-user",(req,resp)=>{
    resp.render("addUser")
})
app.post("/submit-user",(req,resp)=>{
    console.log(req.body)
    resp.render("submitUser",req.body)
})

app.listen(PORT);
console.log(`running on ${PORT}`)
