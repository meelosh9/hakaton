const User = require('../models/users.model.js')

const users = (req, res, next) =>{
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : `${error}`
        })
    })
}
const userById = (req, res, next) =>{
   
    User.find({}) .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : `${error}`
        })
    })
}


module.exports ={
    users,
    userById
}