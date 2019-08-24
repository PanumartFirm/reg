const request = require('supertest')
const chai = require('chai')
const app = require('../app')
chai.should()

describe('Regsystem,' , () => {
            describe('GET /student/:id/timetable',() => {
                    it('should return 200 OK with a timetable',(done) => {
                        request(app).get('/student/1/timetable')
                        .expect(200)
                        .end((err,res) => {
                            let timetable =res.body
                            timetable.should.be.an('array')
                            let subject = timetable[0]
                            subject.should.have.property('subjectNo')
                            subject.should.have.property('subjectName')
                            subject.should.have.property('startTime')
                            subject.should.have.property('endTime')
                            subject.should.have.property('day')
                            done ()
                        }) 
                    })   
                })    
            describe('GET /subjects' ,() => {
                it('shouble return subject with groups when search with string',(done) => {
                    request(app).get('/subject?subjectNo==001')
                    .expect(200)
                    .end((err,res) => {
                        let subject = res.body
                        subject.should.be.an('array')

                        let s = subject[0]
                        s.should.have.property('subjectNo')
                        s.subjectNo.should.to.equal('001')
                    })
                })
                    
            })

})
