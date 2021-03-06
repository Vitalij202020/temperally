const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    numberOfPages: Number,
    summary: String
})

module.exports = mongoose.model("Book", bookSchema)