//14. Write an arrow function that doubles each number in an array. 
let doubles=(a)=>{
    return a.map((x)=>x*2);
}

console.log(doubles([5,3,2,3,4,4]))