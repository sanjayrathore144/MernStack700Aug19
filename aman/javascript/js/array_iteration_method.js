// iteration methods - all iteration methods takes the individual value of an array and process it or  pass to the callback.
// iteration methods are following - 1.forEach() - takes element of an array and pass it to the call back and nothing expect from callback
// 2.map() - pass elements of an array to callback and expect return value from callback
// 3.filter() - pass elements to the callback and expect in return true or false
var arr = [4,7,2,5,3];
var marks = [40,20,28,75,90];
// create callback method 
// so here fun(arr_elements,arr_index,array)
function fun(a){
    // console.log("a got :" + a);
    return a>33;
}
// arr.forEach(fun);
// console.log(arr.map(fun));
console.log(marks.filter(fun));