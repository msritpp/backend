const mongoose = require("mongoose");

const quatlasData = mongoose.Schema({
    name:{
        type:String
    },
    usn:{
        type:String
    },
    branch:{
        type:String
    },
    number:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports = mongoose.model("quatlas-data",quatlasData);