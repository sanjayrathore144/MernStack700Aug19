var marks = [88,78,48,69,92];
// push() - used for pushing an element at the end of the array
marks.push(90);
console.log(marks); 
// pop() - used for deleting an element from the end
marks.pop();
console.log(marks);
// shift() - used for removing an element from the start
marks.shift();
console.log(marks); 
// unshift() - used for adding an element at the start
marks.unshift(96);
console.log(marks);
// tostring() - used for converting an array into string and return it .
var s = marks.toString();
console.log(s);
// splice(index,deleting elements,adding elements) - used for adding element into at particular index
marks.splice(2,1,40,60);
console.log(marks);
// slice() - used for doing slices of an array and return it. and we can set the ending slice index too and here ending index is excluded
// var sl = marks.slice(3);
// console.log(sl);
var sli = marks.slice(3,5);
console.log(sli);
// concat() - used for adding two string and return it
var arr3 = [2,3,6];
var st = marks.concat(arr3);
console.log(st);

