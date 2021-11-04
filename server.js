const express = require("express")
const cors = require("cors")
const db = require('./config/db.js')
const app = express()

const users = require('./routes/user.route.js')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/api/user',users)

app.use('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(5000,() => {
    console.log('Server is listening on port 5000....')
})

