// Write a function that merges two objects into one. (4 marks) 

let obj1 = { name: "Rizon", age: 24 };
let obj2 = { city: "Kathmandu", country: "Nepal" };

let merge=(x,y)=>{
    return { ...x, ...y };
}
console.log(merge(obj1,obj2));