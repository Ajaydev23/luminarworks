function secondLarge(num1,num2,num3)
{
    if((num1>num2)&(num1>num3))
    {
        if(num2>num3)
        {
            return num2;
        }
        else{
            return num3;
        }
    }
    if((num2>num1)&(num2>num3))
    {
        if(num1>num3)
        {
            return num1;
        }
        else{
            return num3;
        }
    }
    if((num3>num1)&(num3>num2))
    {
        if(num1>num2)
        {
            return num1;
        }
        else{
            return num2;
        }
    }
}
console.log(secondLarge(500,20,100));