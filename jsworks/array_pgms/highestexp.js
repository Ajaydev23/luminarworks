var expenses = [12000, 13000, 14000, 15000, 11000, 25000, 17000]
var max = expenses[0];
for (let amount of expenses) {
    if (amount > max) {
        max = amount;
    }
}   
console.log(`the highest expense is ${max}`);
