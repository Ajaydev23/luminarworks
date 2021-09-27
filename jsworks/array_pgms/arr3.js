var arr=[1,2,3,4,5,6,7,8]
var op=[]
for(let amount of arr)
{

    if(amount<5)
    {
        
        op.push(amount-1)
    }
    else if(amount>5)
    {
        op.push(amount+1);

    }
    else{
        op.push(amount)
    }
}
console.log(op);