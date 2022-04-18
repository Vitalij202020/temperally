const Router = require('express')
const router = new Router()
const BookController = require('../Controller/book')
const bookController = new BookController()
const BookValidator = require('../validations/book')
const {validate} = require("express-validation");


router.post('/book/create', validate(BookValidator.createOrUpdateBookValidator) , bookController.CreateBook)
router.get('/book/all', bookController.GetAllBooks)
router.get('/book/:id', bookController.GetBookById)
router.delete('/bookdel/:id', bookController.DeleteBookById)
router.put('/bookupd/:id', validate(BookValidator.createOrUpdateBookValidator),  bookController.UpdateBook)




module.exports = router