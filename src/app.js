const express = require("express");
const conn = require("./db/conn");
const data = require("./data.json");
const mongoose = require("mongoose");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
// create a new students
app.get("/students", (req, res) => {
    res.send("hello world");
})

app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        console.log("success");
        res.status(201).send(user);
    }).catch((e) => {
        console.log("error" + e);
        res.status(400).send(e);
    })

    // res.send("hello from student side");
})

const uri = "mongodb+srv://Surbhi_194:Surbhi_194@cluster0.etezf8c.mongodb.net/studentapi?retryWrites=true&w=majority"

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connect is established");
}).catch((e) => {
    console.log("no connection");
})

app.listen(port, () => {
    console.log((`connection is setup at ${port}`));
})