var num = 5;
var str = "";
for (let i = 0; i <= num; i++) {

    {



        for (let j = 0; j <= (num - i); j++) {

            str += " ";

        }
        for (let s = 1; s <= 2 * i - 1; s++) {
            if (i == 1 || i == num) {
                str += "*";
            }
            else {

            }

        }


        console.log(str);
        str = "";

    }
}
