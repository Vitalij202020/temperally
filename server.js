const express = require('express')
const app = express()
const config = require('./config/config')
const StudentRouter = require('./routes/Student')
const mongoose = require('mongoose')
const bookRouter = require('./routes/book')

app.use(express.json())
app.use(bookRouter)

mongoose.connect(config.connectDB).then(() => {
    console.log("Connected to DB!!!")
    app.listen(config.port, () => console.log("server started on port " + config.port))
}).catch(() => {
    console.log("Error connecting to DB")
})

//app.use(StudentRouter)

