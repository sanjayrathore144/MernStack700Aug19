var classroom = {
    number_of_students: 14,
    students: [
        { name: "Aayushi", age: 20, city: "pune", marks: [45, 76, 34], cat: "Gen" },
        { name: "rahul", age: 24, city: "jaipur", marks: [17, 72, 34], cat: "sc" },
        { name: "prateek", age: 36, city: "pune", marks: [22, 46, 84], cat: "obc" },
        { name: "sagar", age: 56, city: "chdgrh", marks: [33, 36, 34], cat: "st" },
        { name: "hanuman", age: 45, city: "jaipur", marks: [49, 26, 34], cat: "obc" },
        { name: "ram", age: 25, city: "pune", marks: [55, 16, 34], cat: "Gen" },
        { name: "laxman", age: 27, city: "jaipur", marks: [67, 52, 34], cat: "sc" },
        { name: "raj", age: 36, city: "pune", marks: [73, 66, 84], cat: "st" },
        { name: "vipul", age: 66, city: "chdgrh", marks: [15, 76, 34], cat: "obc" },
        { name: "mahesh", age: 25, city: "jaipur", marks: [35, 86, 34], cat: "st" },
        { name: "mohan", age: 28, city: "pune", marks: [45, 36, 34], cat: "sc" },
        { name: "meena", age: 26, city: "jaipur", marks: [57, 22, 34], cat: "sc" },
        { name: "anita", age: 35, city: "pune", marks: [33, 86, 84], cat: "Gen" },
        { name: "ganesh", age: 59, city: "chdgrh", marks: [55, 96, 34], cat: "Gen" },
        { name: "shankar", age: 43, city: "jaipur", marks: [65, 46, 34], cat: "obc" },
    ]
}
//3. define a function getPassedStudentsNamesA() that will return all students who passed. passing criteria will be 
        // a.)   marks> 33 in each subject.
        // b.)   marks> 33 in each subject and overall avg > 50
        // c.)   for general cat. marks> 33 in each subject and overall avg > 50
        //       for obc cat. marks> 33 in each subject and overall avg > 40
        //       for sc and st  cat. marks> 33 in each subject only

function getPassedStudentsNamesA(){
    // 1.according to first criteria
    // b.)   marks> 33 in each subject and overall avg > 50
    let passed = classroom.students.filter((s)=>{
        var ind = s.marks.every((m)=>{return m>33});
        var total = s.marks.reduce((a,b)=>{return a+b});
        return ind && total>150;
    })
    return passed;
}
console.log("Testing getPassedStudentsNamesA function............");
console.log(getPassedStudentsNamesA());