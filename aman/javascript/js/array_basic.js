// in js, array is the group of data element and data element can be different
// we can define array from 2 ways - 1. by making normal array 2. by making array constructor
var arr = [23,5,10,1,8];
// var arr2 = new Array(4);
// var arr2 = new Array(2,4,7,8,1,8);
// but in array constructor if we use only one value in constructor like Array(2) then it will taken as a array length otherwise will consider as array element
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr2.length);
// var sum = 0;
// for(let i=0;i<arr.length;i++){ 
//     // sum += arr[i];
//     console.log(arr[i]**2);
// }
// console.log(sum);
// we can change array element too
arr[3] = 4;
console.log(arr);