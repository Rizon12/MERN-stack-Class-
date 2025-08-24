//12. Given an array of numbers, map it to an array of `true` (if the number is positive) or `false` (if the 
//number is negative). 

let arr=[1,2,3,4,5,-7,-8,-9];
let newArr=arr.map((x)=>{
    return Boolean(x>0);
})

console.log(newArr);