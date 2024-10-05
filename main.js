function  Student (name, subject, grade = 0) {
    this.name = name;
    this.grade = grade;
    this.subject = subject;
    this.study = function (hours) {
        this.grade += hours * 5;
    };
    this.getGrade = function () {
        return this.grade;
    };
    this.changeSubject = function (newSubject) {
        this.subject = newSubject;
    };
}
const student = new Student("Shafag", "Programming");
student.study(8);
console.log(student.getGrade());
student.changeSubject("English");
console.log(student.subject);
student.study(10);
console.log(student.getGrade());