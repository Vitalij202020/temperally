const Router = require('express')
const router = new Router()
const StudentController = require('../Controller/Student')
const studentController = new StudentController()

router.get('/students', studentController.GetStudents)

module.exports = router