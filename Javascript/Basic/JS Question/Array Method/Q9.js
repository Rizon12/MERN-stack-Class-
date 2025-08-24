//9. Write a function that maps an array of numbers to an array where each number is doubled. 

let arr=[1,2,3,44,4,4,3,5,6,7,8,9];
let newArr=arr.map((values)=>{
    return values*2;
})
console.log(newArr);