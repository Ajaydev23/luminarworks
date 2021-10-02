var num = 5;

for (let row = 0; row < num; row++) {
    let str = "";




    for (let space = 0; space < (num - row - 1); space++) {

        str += " ";

    }
    for (let col = 0; col < (row + 1); col++) {
        str += "* ";

    }
    console.log(`        ${str}`);





}
