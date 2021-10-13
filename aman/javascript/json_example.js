let company = {
    no_of_employees:20,
    student:[
        {Name:"kailash",Age:56,city:"jaipur",cat:"obc"},
        {Name:"rocky",Age:26,city:"pune",cat:"gen"},
        { Name: "binod", Age: 42, city: "banglore", cat: "st"},
        {Name:"vinod",Age:36,city:"rewadi",cat:"gen"}
    ]
}
// for getting age of binod
// console.log(company.student[2].Age);
// return all gen cat employees
function getgencat(){
    var catname = company.student.filter((c)=>{
        return c.cat === "gen";
    })
    return catname;
}
// console.log(getgencat());
// return those employee who has age greater than 40
function getempbyage(){
    let agfactor = company.student.filter((ag)=>{
        return ag.Age >40;
    })
    return agfactor;
}
console.log(getempbyage());