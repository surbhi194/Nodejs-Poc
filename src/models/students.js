const mongoose = require("mongoose");
const express =require("express");
const validator =require("validator");

const studentsScheme = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
            type:String,
            require:true,
            unique:[true,"E-mail idis already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("invalid Email")
                }
            }
        },

    Phone:{
        type:Number,
        min:10,
        require:true
    },
    address:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Student',studentsScheme);

// module.export = Student;