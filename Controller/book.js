const BookService = require('../Services/book')
const bookService = new BookService()

class BookController {

    async CreateBook (req, res, next) {
        const book = req.body
        const result = await bookService.CreateBook(book)

        if (result) {
            res.send(result)
        } else {
            res.send("error")
        }
    }

    async GetAllBooks (req, res, next) {
        const results = await bookService.GetAllBooks()

        if (results) {
            res.send(results)
        } else {
            res.send("error")
        }
    }

    async GetBookById (req, res, next) {
        const id = req.params.id
        const result = await bookService.GetBookById(id)

        if (result) {
            res.send(result)
        } else {
            res.send("error")
        }
    }

    async DeleteBookById (req, res, next) {
        const id = req.params.id
        const result = await bookService.DeleteBookById(id)

        if (result) {
            res.send(result)
        } else {
            res.send("error already was deleted")
        }
    }

    async UpdateBook (req, res, next) {
        const id = req.params.id
        const book = req.body
        const result = await bookService.UpdateBook(id, book)

        if (result) {
            res.send(result)
        } else {
            res.send("error")
        }
    }
}

module.exports = BookController