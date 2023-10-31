const Student = require('./student'); 
const Diary = require('./diary'); 
const Subject = require('./subject'); 

const student1 = new Student("Zarina", 5);
const student2 = new Student("Alice", 6);

const diary1 = new Diary(student1);
const diary2 = new Diary(student2);

const math = new Subject("Literature");
const history = new Subject("Music");

diary1.addSubject(math);
diary2.addSubject(history);

diary1.recordHomework("Literature", "Read Book 'Alice on the Wonderland'");
diary2.recordHomework("History", "Read Chapter 3");

console.log(diary1);
console.log(diary2);
