var text="hai hello hai hello"
//print word count
var word_count={};
// var words=text.split(" ");
// for(let word of words)
// {
//     //check for hai is present in word_count if yes add current value +1 else word_count[word]=1
//     if(word in word_count)
//     {
//         word_count[word]+=1;
//     }
//     else{
//         word_count[word]=1;
//     }
// }
// console.log(word_count);
text.split(" ").map(word=>word in word_count?word_count[word]+=1:word_count[word]=1)
console.log(word_count);