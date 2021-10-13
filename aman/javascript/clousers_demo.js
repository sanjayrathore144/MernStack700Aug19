// clouser is basically an inner function that is returned from it's enclousing function and such function have special capablities to use local variable of it's enclosing function known as laxical scope even outside of the it's body and after it's execution too 
function fun(a){
    return function(b){
        console.log("this is inner function which is returned from enclosing function known as clouser");
        console.log(a+b);
    }
}
var t = fun(7);
t(4);