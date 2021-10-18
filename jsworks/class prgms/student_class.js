//object create var refernce name=new classname()
class Student{
    constructor(rol,course,stud_name){
        this.rol=rol,
        this.course=course,
        this.stud_name=stud_name
    }
    printStudent(){
        console.log(this.rol,this.course,this.stud_name);
    }
}
var obj1=new Student(23,"MEARN","Ajay")

obj1.printStudent();

