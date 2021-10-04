//find first recursive character'A'
var pattern="ABCABB"
var first_rec={}

for(let char of pattern)
{
    // console.log(char);
    if(char in first_rec)
    {
        console.log(char,"is the recursive character");
        break;
    }
    else
    {
        first_rec[char]=1;
    }
}
