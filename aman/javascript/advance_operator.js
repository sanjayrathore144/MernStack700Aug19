//advance operators are following - ',',() grouping operator,new ,typeof ,instanceof ,in,of,delete,super ,rest and spread operator
// new - used for creating constructor
var v = "john";
var v1 = 76;
var v2 = true;
var v3 = [2,5,9,6,4];
// var v3 =[];
var v4 = {
    name:"ammy",
    age:22,
    marks:85
}
var v5 = new Date();
function person(){
    // console.log("Hello");
}
var v6 = new person();
// typeof =>
// console.log("Sting :"+ typeof v );
// console.log("Number :" + typeof v1);
// console.log("Boolean :" + typeof v2);
// console.log("Array :" + typeof v3);
// console.log("json :" + typeof v4);
// console.log("Date :" + typeof v5);
// console.log("Self :" + typeof v6);

// instanceof => used for returning boolean value When object and constructor name is given
// console.log( v5 instanceof Date);
// console.log(v6 instanceof Object);
// in and of operator =>
// console.log("in operator gives us index");
// for (let i in v3){
//     console.log(i);
//     // it gives us index of element
// }
// console.log("of operator gives us array element");
// for(let i of v3){
//     // it gives us array element 
//     console.log(i);
// }

// Delete operator - used for deleting element
// if delete operator delete array element but it will not free the space in array it just empty that element
// console.log(v3);
// delete v3[1];
// console.log(v3);
// console.log(v4);
// delete v4.age;
// console.log(v4);

// rest and spread operator 
// operator in defination is known as rest operator and thats why that parameter is known as rest parameter
function sum(a,b,...c){
    var total = 0;
    total = a+b;
    if (v3.length>0){
        for(let i of c){
            total += i;
        }
    }
    console.log(total);
}
// if we use ... in calling statement then it is known as spread operator and if we use ... in defination or function defination then it is known as rest operator 
sum(5,3);
// sum(...v3);