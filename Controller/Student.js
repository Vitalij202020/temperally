const StudentService = require('../Services/Student')
const studentService  = new StudentService()


class StudentController {

    GetStudents (req, res, next) {
        const students = studentService.GetStudents()
        res.send(students)
    }
}

module.exports = StudentController