var arr=[10,11,14,12,13,15]
arr.sort((num1,num2)=>num1-num2)
console.log(arr);
var element=3;
var flag=0,upper=arr.length-1,lower=0;
while(lower<=upper)
{
    mid=Math.floor((lower+upper)/2);
    if(element<arr[mid])
    {
        upper=mid-1;
    }
    else if(element>arr[mid])
    {
        lower=mid+1;
    }
    else if(element==arr[mid])
    {
        flag+=1;
        break;
    }
}
console.log(flag==0?"element not found":"element found");
