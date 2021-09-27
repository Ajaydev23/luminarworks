var expenses = [12000, 13000, 14000, 15000, 11000, 25000, 17000]
var max = expenses[0];
for (let i = 0; i < expenses.length; i++) {
    if (expenses[i] > max) {
        max = expenses[i];
    }
}   
console.log(`the lowest expense is ${max}`);
