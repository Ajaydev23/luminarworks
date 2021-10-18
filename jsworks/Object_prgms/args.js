// function add(...args){
//     return args.reduce((num1,num2)=>num1+num2)
// }
// console.log(add(10,49,38,45,39));
function getMax(...args)
{
    return args.reduce((num1,num2)=>num1>num2?num1:num2)

}
console.log(getMax(10,11,12,13,14));