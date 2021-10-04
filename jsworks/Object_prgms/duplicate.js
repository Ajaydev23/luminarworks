var arr=[10,11,10,20,21,21]
var duplicate={}
for(var dupl of arr)
{
    if(dupl in duplicate)
    {
        duplicate[dupl]+=1;

    }
    else{
        duplicate[dupl]=1;
    }
}
var dup=duplicate.map(duplicate[dupl]=>duplicate[dupl]==2)