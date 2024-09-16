function Student(name, grade, score) {
  this.name = name;
  this.grade = grade;
  this.score = score;
}

Student.prototype.school = "UPI";
Student.prototype.greeting = function () {
  return "Hello " + this.name;
};

Student.prototype.study = function () {
  return "I study at " + this.school;
};

let myStudent = new Student("Linda", 20, 100);

console.log(myStudent.name);
console.log(myStudent.school);
console.log(myStudent.greeting());
console.log(myStudent.study());
