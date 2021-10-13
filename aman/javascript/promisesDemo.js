// promise - promise is an object that represents pending state that can be fullfilled(succcess) or rejected in nearby future.
// promise provides us two functions then() and catch() with the help of these function we attach our handler functions  for both the condition 
// then() function also return promise which is again taken by then() function because then() take the promise if response came or successed
//  we are using promises because it increases readablity which was decreases into pyramids of doom or callback hell.
var fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/todos/1')
// here fetch function return promises
.then(response => response.json())
// and into then function handler function will also return promise so it's rnesponse is taken by next then 
.then(json => console.log(json))
.catch(err=>console.log("error occurs" + err));