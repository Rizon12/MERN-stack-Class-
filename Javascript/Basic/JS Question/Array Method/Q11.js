//11. Write a function that converts an array of strings to uppercase using `map`. 

let arr=['rizon','Apple','Ball','cat','car'];
let newArr=arr.map((x)=>{
    return x.toUpperCase();
})
console.log(newArr);