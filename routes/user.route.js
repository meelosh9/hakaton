const express = require("express")
const router = express.Router()

const { userById} = require('../controllers/user.controller.js');


router.get('/',userById)

module.exports = router