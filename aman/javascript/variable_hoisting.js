// variable hoisting is only possible in var keyword ,scope of var keyword variable can be global scope or function level scope.
// & variable hoisting concept is dependent on scope so wherever you declare a variable it will always considered initally in global scope 
// & in function level scoping , var keyword scoping is not only of block level it will of function level scoping
// console.log(a);
//  var a ;                                          // global level scoping
// function level scoping
var x = "hello"
console.log(x);        //hello
try{
console.log(y);       // Error - reference error
}
catch(e){
    console.log("Error occurs");
}
function fun(){
    console.log(x);     // hello
    console.log(y);     // undefined
    if(x){
        var y = "coder";
        console.log(x); //hello
        console.log(y); //coder
    }
    console.log(x);    // hello
    console.log(y);    // coder
}
fun();
