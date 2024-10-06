const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://quatlas:quatlas123@cluster02.qch4w.mongodb.net/quatlasdata";

const connection = ()=> {
    mongoose.connect(mongoURI).then(()=> console.log("connected to mongo succesfully.")).catch((e) => console.log(e.message))
}

module.exports = connection;