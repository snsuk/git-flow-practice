class Diary {
    constructor(student) {
      this.student = student;
      this.subjects = [];
    }
  
    addSubject(subject) {
      this.subjects.push(subject);
    }
  
    recordHomework(subject, homework) {
      const matchingSubject = this.subjects.find((s) => s.name === subject);
      if (matchingSubject) {
        matchingSubject.homework = homework;
      }
    }
  }
  
  module.exports = Diary; 
  