const express =require("express");
const conn=require("./db/conn");
const data= require("./data.json");
const mongoose = require("mongoose");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT ||8000;

app.use(express.json());
// create a new students
app.get("/students", (req,res)=>{
   res.send("hello world");
})
// const start =async () =>{
//     try {
//         await conn(process.env.MONGODB_URL);
//         await student.create(data);
//         console.log("success");
//     } catch(e)
//     {
//         console.log(e);
//     }
// };

app.post("/students", (req,res)=>{
    console.log(req.body);
// const user = new Student(req.body);
// user.save().then(()=>{
//     res.status(201).send(user);
// }).catch((e)=>{
//     res.status(400).send(e);
// })

    res.send("hello from student side");
})
app.listen(port, ()=>{
    console.log((`connection is setup at ${port}`));
})