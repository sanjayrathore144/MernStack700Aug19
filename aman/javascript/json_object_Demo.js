let a ="Hello";
let b = 76;
// array
let roll_no = [56,78,23,32,98];
// json object
let person = {
    Name:"Ramesh",
    Age:23,
    cat:"st"
}
var x = "Name";
// for entering in a object we use . notation
// for entering in array we use [] notation
// 1.first way to access json object key
console.log(person.Age);
//2. we can access like that too
console.log(person["cat"]);
// for accessing variable which is outside from the json object 
console.log(person[x]);