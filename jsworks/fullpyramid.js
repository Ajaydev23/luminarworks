var num = 5;
var str = "";
for (let i = 0; i <= num; i++) 
{
    
    {
        var space="";

        for (let j = 0; j <= (num-i-1); j++) {

            str += " ";

        }
        for(let s=1;s<= 2*i + 1;s++)
        {
            str+="*";

        }
        console.log(space+str);
        str="";

    }
    

}
