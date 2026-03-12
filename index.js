import express from "express";
import morgan from "morgan";

const app = express();

const PORT = 3002;



app.get("/",(req,resp)=>{
    resp.send("This is Home Page")
})
app.get("/users",(req,resp)=>{
    resp.send1("This is Users Page")
})
app.get("/error",(req,resp)=>{
    resp.send("This is error Page")
})

function errorHandling(error,req,resp,next){
    resp.status(error.status || 500).send("Try after someTimes")
}
app.use(errorHandling)

app.listen(PORT);
console.log(`running on ${PORT}`)