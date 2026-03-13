import express from 'express';

const app = express();
const PORT = 3002;


app.get("/",(req,resp)=>{
    const users = ["anil","sanam","sahil","neyaj"];
    let data = `<ul>`;
    for(let i=0; i<users.length; i++){

        data+=`<li><a href="user/${users[i]}" >${users[i]}</a></li>`
        console.log(users[i])
    }
    data+=`</ul>`
    resp.send(data)
})
app.get("/user/:name",(req,resp)=>{
    console.log(req.params.name)
    resp.send(`this is ${req.params.name} profile page`);
})

app.listen(PORT);
console.log(`Running on ${PORT}`)