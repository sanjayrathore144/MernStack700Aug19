// 1. normal function
function fun(){
    console.log("Hey");
}
// 2. store function in a variable
var fun2 = function(a){
    return a*2;
}
console.log(fun2(5));
// 3. Arrow function - () =>{ } this is basically used when function is passed as a callback

var fun3 = (a,b) => { return a*b};
console.log(fun3(8,4));
// if only one parameter is present and only one statement in the body then don't need to write paranthesis and curly braces and return also it will return by default like this-
var fun4 = a => a*2;
console.log(fun4(9)); 