// constructor is a way to create json objects dyanmically but technically constructor is just a function in that we can assign keys of json object from this keyword and we can also access function in a constructor from this keyword.
function Student(name,age){
    this.name = name;
    this.age = age;
}
Student.prototype.print = function(){
    console.log("Name = " + this.name);
    console.log("Age = " + this.age);
}
// prototype - prototype is basically a shared place of constructor where we can store common functionality of objects 
// used for store or carry common functionality and we can also say this thing taking functionality from prototype is prototype inheritence
let s1 = new Student("Rakesh",21);
let s2 = new Student("joy",23);
console.log([s1.name,s1.age,s2.name,s2.age]);
s1.print();
s2.print();