var num=123;
var cube=0;
while(num!=0)
{
    let rem=num%10;
    cube=cube+(rem**3);
    num=Math.floor(num/10);
}
console.log(cube);