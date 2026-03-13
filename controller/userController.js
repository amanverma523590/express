import { userList } from "../model/userModel.js"

export function handleUsers(req,resp){

    const data = userList();
    console.log(data)
    resp.render("user",{userKaData:data})
}