var student={
    rollno:100,
    name:"Ajay",
    course:"bca",
    total:750

}
//print students name
console.log(student.name);
console.log(student.course);
student.total=800
console.log(student);
//check for grade key
console.log("grade" in student);
//add new key value pair grade:a+
student.grade="A+";
console.log(student);
//add 20 marks of bonus
student.total+=20;
console.log(student.total);