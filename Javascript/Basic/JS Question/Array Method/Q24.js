//24. Write a function that uses `forEach` to log numbers greater than 10 from an array. 

let arr = [1, 2, 3, 4, 5, 13, 6, 7, 12, 21];
arr.forEach(x=>{
    if(x>10){
        console.log(x);
    }
})