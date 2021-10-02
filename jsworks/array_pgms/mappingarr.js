var arr=[2,4,6,3]
var op=[]
var total=0;
for(let num of arr)
{

    total+=num;
 
}
console.log(total);
for(let num of arr)
{
    
    op.push(total-num);
}
console.log(op);