var expenses = [12000, 13000, 14000, 15000, 11000, 25000, 17000]
var min = expenses[0];
for (let amount of expenses) {
    if (amount <= min) {
        min = amount;
    }
}   
console.log(`the lowest expense is ${min}`);
//expenses.reduce((exp1,exp2)=>exp1<exp2?exp1:exp2)