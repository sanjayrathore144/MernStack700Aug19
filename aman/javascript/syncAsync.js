var mylib =require('./myfetchLib');
var data = mylib.fetchSync('https://jsonplaceholder.typicode.com/posts/1');
console.log(data);