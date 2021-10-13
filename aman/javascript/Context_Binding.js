// context binding - in any function ,if we use this keyword then the object which is refered from 'this' is known as context and if made a function inside a object then the context will be that object because this keyword will refer that  json object only
var obj = {
    Name : "ammy",
    Age:"20",
    city:"Bhilwara",
    // print:function(){
    //     console.log(this.Name);
    //      console.log(this.Age);
    //     console.log(this.city);
    //     console.log(this.cat);
    // }
    // try with arrow function
//     print:()=>{
//         console.log(this.name);
//         console.log(this.Age);
//         console.log(this.city);
//     }
}
// obj.print(); 
// so function is seprated from the object and here this keyword is not refering anything so here context is  there so for binding this function with context which is object is known as context binding  
// so for binding the function with context we can use 3 ways for that  - 1. call(), 2. apply(),3. bind()
var print = function (a,b){
    console.log(this.Name);
    console.log(this.Age);
    console.log(this.city);
    // console.log(this.cat);
    console.log(a+b);
    }
// 1. call() - this function is used for binding the function with object or context and we use also pass local parameters in call function lyk that
// obj.print();
// print.call(obj);
// print.call(obj,2,5);
// 2. apply() - this function is used for binding the function with object or context but here in second parameter only array is acceptable 
// print.apply(obj,[8,9]);
// 3. binding() - this function is used for binding only it will not call the function and it will return a bound function and then later we can call that function through bound function 
var bindprint = print.bind(obj);
bindprint(2,3);
// Now let's see can we perform context binding in arrow function so answer is yes but the condition is that if and only if when arrow function is defined into a function not in object or not outside the object if we do like that it will give you output undefined