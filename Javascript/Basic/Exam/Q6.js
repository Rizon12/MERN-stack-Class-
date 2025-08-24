// 6. Given an array of user objects, return only the names of users older than 25. 
// (5 marks) 

let users = [
    { name: "Rizon", age: 24 },
    { name: "Ramesh", age: 30 },
    { name: "Alex", age: 28 },
    { name: "John", age: 22 }
];


let NewUsers=users.filter((x)=>{
    return x.age>25;
})
console.log(NewUsers)