var arr=[2,4,6,3]
var number=5;
for(let i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++)
    {
        if(arr[i]+arr[j]==number)
        {
            console.log(`${arr[i]},${arr[j]}`);
        }
    }
}