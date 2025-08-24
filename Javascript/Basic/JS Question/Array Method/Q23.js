//23. Use `forEach` to log only the odd numbers from an array. 

let arr = [1, 2, 3, 4, 5, 6, 7, 12, 21];
arr.forEach(x=>{
    if(x%2!=0){
        console.log(x);
    }
})