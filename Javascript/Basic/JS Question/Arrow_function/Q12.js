//12. Write an arrow function that returns all even numbers from an array. 

let arr=(a)=>{
    return a.filter((b)=> b%2==0);
}

console.log(arr([2,4,5,6,7]))