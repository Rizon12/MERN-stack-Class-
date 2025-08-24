//4. Write a function that filters out negative numbers from an array. 

let arr=[1,2,3,-5,-7,-8,9,10];
let newArr=arr.filter((x)=>{
    return x>0;
})

console.log(newArr);