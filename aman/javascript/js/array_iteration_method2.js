// some more array iteration methods like - every() - this works like && operator which means that for returning true  every element of an array should  satisfy the condition 
// some() - works like ||(or operator) means that if one array element is satisfied the condition it will return true 
// reduce() - used for reducing multiple elements into one like [4,5,2,1,4] if we want to return the sum then it will reduce array & return 16
// find() - works like filter but  will return only first occurance
var marks = [42,31,49,86,95]
var num = [2,8,5,4,9];
// function markscal(a){
//     return a<33;
// }
// 1. every()-
// var ispass = marks.every(markscal);
// console.log(ispass);
// 2.some() - 
// var isfail = marks.some(markscal);
// console.log(isfail);
// 3. reduce() - 
function fun(p){
    return p%2==0;
}
// var total = num.reduce(sumarr);
// console.log(total);
// 4.find() - 
console.log(num.find(fun));

