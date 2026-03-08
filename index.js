import express from 'express'

const app = express();

const PORT = 3002;

function checkAge(req,resp,next){
    console.log(req.query.age)

    if( !req.query.age || req.query.age<18){
        resp.send("under age not allowed")
    }else{
        next()
    }
}
function checkUrl(req,resp,next){
    console.log("url check");
    next()
}
// app.use(checkAge)

app.get("/",(req,resp)=>{
    resp.send("<h1>This is Home Page</h1")
})
app.get("/login",checkAge,(req,resp)=>{
    resp.send("<h1>This is Login Page</h1")
})
app.get("/user",checkUrl,(req,resp)=>{
    resp.send("<h1>This is User Page</h1")
})
app.get("/products",checkAge,checkUrl,(req,resp)=>{
    resp.send("<h1>This is Products Page</h1")
})

app.listen(PORT)
console.log(`runnng at port ${PORT}`)