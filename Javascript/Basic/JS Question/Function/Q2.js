//2. Write a function that uses a `for` loop to calculate and return the sum of the first `n` natural numbers. 

function sum(y){
    let x=0;
    for(i=1;i<=y;i++){
        x+=i;
    }
    return x;
}
let result= sum(20);
console.log("Sum of Given N Number is:", result)