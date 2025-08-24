//11. Write an arrow function that takes an array and returns the sum of its elements. 

let sum=(a)=>{
    return a.reduce((acc,values)=>acc+values,0)
}
console.log(sum([5,6,7,2]));