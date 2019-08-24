const express = require('express')
const app = express()
const student = require('./student')

app.get('/student/:id/timetable',(req,res) => {
    let s = student.getStudent(req.params.id)
    let timetable = s.getTimetable()
    res.send(timetable)
})

app.get('/subjects',(req,res) => {
    let subjectNo = req.query.subjectNo
    

})


module.exports = app;