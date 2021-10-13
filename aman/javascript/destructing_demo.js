// destructring of arrray & json => this process is used for break and spread the element of array or object and store it into variable (for array) and keys (for object)
// destructuring of array =>
// let arr = ["Ria",26,true];
// // suppose we want to access any element so how can we arr[0] ,arr[1],arr[2] instead of using this we use destructring
// var [name,age,isMarried] = arr;
// console.log(name);
// console.log(age);
// console.log(isMarried);
// Now destructring of json object =>
var obj = {
    Name:"Rohan",
    Age:19,
    city:"Delhi"
}
var {Age,city} = obj;
console.log(Age);
console.log(city);