//15. Write an arrow function that checks if a given element exists in an array. 

let arr=[4,5,32,3,4,5,1,2];
const exists = (element) => arr.includes(element);

console.log(exists(5));
console.log(exists(10));