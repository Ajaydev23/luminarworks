//print name of developer who is taking highest salary
var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
var high_salary=0;
for(let employ of employees)
{
    if(employ[3]=="developer"&high_salary<employ[2])
    {
        
        high_salary=employ[2];

    }
}
console.log("the develeoper who is taking the highest salary is",high_salary.employ[2]);