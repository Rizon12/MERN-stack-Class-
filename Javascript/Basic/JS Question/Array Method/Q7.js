//7. Filter an array of numbers to return only those greater than 5. 

let arr=[1,2,3,4,5,6,7,8,9,0];
let newArr=arr.filter((x)=>{
    return x>5;
})
console.log(newArr);