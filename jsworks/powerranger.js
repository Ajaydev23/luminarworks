//2=2+22
//3=3+33+333
//4=4+44+444+4444
var num=4;
var res=0;
var sum=0;
for(var i=1;i<=num;i++)
{
    res=res*10+num;
    sum+=res;
    

}
console.log(sum);
