//10. Convert an array of numbers into an array of strings using `map`. 

let arr=[1,2,3,4,5,6,7,8,9];
let newArr=arr.map((x)=>{
    return String(x);
})
console.log(newArr);