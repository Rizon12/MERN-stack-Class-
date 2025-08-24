//16.Write an arrow function that filters out numbers greater than 10 from an array. 

let numbers=(a)=>{
    return a.filter((x)=>x>10);
}
console.log(numbers([10,20,30,50,1,2,3,5,6,7,8,9]))