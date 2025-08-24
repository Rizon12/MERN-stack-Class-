//5. Write a function that uses a `for` loop to calculate and return the factorial of a given number `n`. 

function factorial(x){
    let res=1;
    for(let i=1;i<=x;i++){
        res*=i;
    }
    return res;
}
let result=factorial(5);
console.log('The factorial of given n number is:', result);