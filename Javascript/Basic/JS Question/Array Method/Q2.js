//2. Filter an array to include only odd numbers. 

let arr=[1,2,3,4,5,6,7,12,21];
let filterArr=arr.filter((values)=>{
    return values%2!=0;
})
console.log(filterArr);