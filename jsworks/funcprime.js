function primeNums(lower,upper)
{
    for(let i=lower;i<upper;i++)
    {
        for(let j=2;j<=i;j++)
        {
            if(i%j==0)
            {
                return i;
                break;
            }


        }
        
    }
    console.log(primeNums(10,20));
}
