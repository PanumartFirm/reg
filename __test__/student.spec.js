const expect = require('chai').expect
const app = require('../student')

    describe('Student',() =>{
            describe('timetable',() => {
                it('shouble return list of subjects with timetable', () => {
                    let s = app.getStudent(1)
                    let timetable = s.getTimetable()
                    expect(timetable).to.be.an('array')
                })
            })

    })