const { ObjectId } = require('bson')
const mongoose = require('mongoose')
const { stringify } = require('querystring')
const Schema = mongoose.Schema

const userSchema = new Schema({
    _id : {
        type : ObjectId
    },
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User