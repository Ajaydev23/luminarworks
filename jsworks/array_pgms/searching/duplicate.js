var dupl=[11,111,12,11,104]

for(let i=0;i<dupl.length;i++)
{
    for(let j=1;j<i;j++)
    {
        console.log(dupl[i]==dupl[j]?"found":"not found")
        break;
    }
    
}

