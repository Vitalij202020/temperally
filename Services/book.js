const BookModel = require('../Models/book')

module.exports = class BookService {

    async CreateBook (book) {
        const bookToAdd = new BookModel(book)
        return await bookToAdd.save()
    }

    async GetAllBooks () {
        return await BookModel.find()
    }

    async GetBookById (id) {
        console.log(typeof id)
        return await BookModel.findById(id)
    }

    async DeleteBookById (id) {
        return await BookModel.findByIdAndDelete(id)
    }

    async UpdateBook (id, newBook) {
        return await BookModel.findByIdAndUpdate(id, newBook, {new: true})
    }
}