var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]



//sort employee wrt exp desc
// employees.sort((exp1,exp2)=>(exp2[5]-exp2[4])-(exp1[5]-exp1[4]))
// console.log(employees);
//sort employee wrt exp asc
// employees.sort((exp1,exp2)=>(exp1[5]-exp1[4])-(exp2[5]-exp2[4]))
// console.log(employees);
//sort emp wrt salary
// employees.sort((sal1,sal2)=>sal1[2]-sal2[2]);
// console.log(employees);
//sort developers wrt to salary

var res=employees.filter(sal=>sal[3]=="developer").sort((sal1,sal2)=>sal1[2]-sal2[2]);
console.log(res);
