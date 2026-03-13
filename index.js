import express from 'express'
import { handleUsers } from './controller/userController.js';
const app = express();
const PORT = 3002;

app.set("view engine","ejs")

app.get("/users",handleUsers)

app.listen(PORT)
console.log(`running at server ${PORT}`)