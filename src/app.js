const express = require("express");
const conn = require("./db/conn");
const data = require("./data.json");
const mongoose = require("mongoose");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;
const indexRouter = require('./routes/indes');
const SWAGGER = require("./config/swagger.js");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

app.use(express.json());

// create a new students
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
})

//get student by id
app.get("/students", async(req,res) =>{
    try{
       const studentsData =await Student.find();
       res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

//get all students
// app.get("/students/:id", async(req,res) =>{
//     try{
//         const _id = req.params.id;
//        const studentData =await Student.findById(_id);
//        if(!studentData){
//         return res.status(404).send();
//        }else{
//         res.send(studentData);
//        }
       
//     }catch(e){
//         res.status(404).send(e);
//     }
// })

//Update the student
app.patch("/students/:id", async(req,res) =>{
    try{
        const _id = req.params.id;
       const updateStudents =await Student.findByIdAndUpdate(_id, req.body, {
        new: true
       });
       res.send(updateStudents);
    }catch(e){
        res.status(404).send(e);
    }
})

//delete the student  by id
app.delete("/students/:id", async(req,res) =>{
    try{
        const _id = req.params.id;
       const deleteStudents =await Student.findByIdAndDelete(_id);
       if(!_id){
        return res.status(400).send();
       }
       res.send(deleteStudents);
    }catch(e){
        res.status(404).send(e);
    }
})



const swaggerOptions = {
    definition: {
        openapi: SWAGGER.open_api_version,
        info: {
            title: SWAGGER.title,
            version: SWAGGER.version,
            description: SWAGGER.description,
        },
        servers: [
            {
                url: SWAGGER.url,
            },
        ]
    },
    apis: SWAGGER.apis,
};

const specs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/', indexRouter);


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