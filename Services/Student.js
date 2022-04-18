class StudentService {
    GetStudents () {
        return [
            {
                id: 1, name: 'Rick', gpa: 2.2
            },
            {
                id: 2, name: 'Monty', gpa: 2.7
            },
            {
                id: 3, name: 'Borya', gpa: 4.5
            }
        ]
    }
}

module.exports = StudentService