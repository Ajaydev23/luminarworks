//print the gcd(14,21) create a program to find the gcd of tewo number
var num1=14;
var num2=28;
var hcf=0;
// while(num1!=num2)
// {
//     if(num1>num2)
//     {
//         num1-=num2;
//     }
//     else
//     {
//         num2-=num1;
//     }
// }
// console.log(`the gcd id ${num2}`);
for(let i=2;i<=num1;i++)
{
    if(num1%i==0&num2%i==0)
    {
        hcf=i;
        

    }
}
console.log(`the hcf if ${hcf}`);