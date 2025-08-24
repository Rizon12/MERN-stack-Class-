//15. Write a function that uses a `for` loop to calculate and return the sum of the squares of the first `n` 
//natural numbers. 

function square(x){
    let result=0;
    for(let i=1;i<=x;i++){
        result+=i**2;
    }
    console.log(result);
}

square(10);