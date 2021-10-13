// example of asynchronous code
console.log("statement 1");
setTimeout(()=>{
    console.log("statement 2");
},3000)
console.log("statement 3");
console.log("statement 4");
//  so this is basically asynchronous code where rest of the code will executed before settimeout() function because settimeout was executed after 3 second