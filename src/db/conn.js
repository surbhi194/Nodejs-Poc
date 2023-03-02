const mongoose = require("mongoose");

const uri = "mongodb+srv://Surbhi_194:Surbhi_194@cluster0.etezf8c.mongodb.net/studentapi?retryWrites=true&w=majority"

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connect is established");
}).catch((e)=>{
    console.log("no connection");
})
