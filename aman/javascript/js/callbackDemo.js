function fun(x){
    console.log("Hey There!! ");
    x();
}
function fun2(){
    console.log("this is the program of fun");
}
fun(fun2);
// so here passed function as a parameter is known as call back function 
// setTimeout(fun2,5000);
// setTimeout() method is used for calling a method after given time in ms as a parameter of setTimeout() and first parameter is callback function 