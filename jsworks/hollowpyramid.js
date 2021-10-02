var num = 5;

for (let row = 0; row <=num; row++) {
    let str = "";
    



    for (let space = 0; space <=(num - row - 1); space++) {

        str += " ";

    }
    for (let col = 0; col <(num*2-1); col++) {
        if(row==num|row+col==num-1|row-col==num-1)
        {
            str += "* ";
        }
        

    }
    console.log(`        ${str}`);





}