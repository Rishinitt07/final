const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id : Number,
    name : String,
    user:String,
    password : String
})

const user = mongoose.model("users", userSchema)
 module.exports = user;  //export the model