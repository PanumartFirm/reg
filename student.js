function Student(id) {
  this.id = id;
  this.getTimetable = () => {
    return [
      { subjectNo: "001", subjectName: "Software Tesing",credit: "3.00" ,  startTime: "9:00" , endTime : "endTime", day : "Firday"}
    ];
  };
}

function getStudent(id) {
  return new Student(id);
}

module.exports.getStudent = getStudent;
