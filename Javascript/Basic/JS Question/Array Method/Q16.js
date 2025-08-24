//16. Write a function that squares each number in an array using `map`.

let arr=[1,2,3,4,5,6,7,8,9];
let newArr=arr.map((x)=>{
    return x**2;
})

console.log(newArr);