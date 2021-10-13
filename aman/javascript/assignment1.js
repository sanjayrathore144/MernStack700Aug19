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



// 1. define a function getStudentsByCity(city) that will take cityName as argument and return all students of 
//that city.
function getStudentsByCity(city){
    var cityName = classroom.students.filter((s)=>{
        return s.city === city;
    })
    return cityName;
}
console.log(getStudentsByCity("jaipur"));