// function doubleArray(arr){
//     function fun(a){console.log(a*2)};
//     arr.forEach(fun());
// }
// var ar = [3,8,5,4,3];
// try{
//     doubleArray(ar);
// }
// catch(e){
//     console.log("error occured in doubleArray()")
// }
// finally{
//     // it will always execute and here we write clean up code which means suppose connection established with database or filesystem so need to close it too we generally use it for that purpose 
//     console.log("Hey ErrorHandling")
// }
// console.log("After");
//  example 2 - 
function returnsome(){
    try{
        return "abc";
    }
    catch(e){
        console.log("try can not work here ERROR");
    }
    finally{
        console.log("js");
        return "xyz"; 
    }
}
console.log(returnsome());