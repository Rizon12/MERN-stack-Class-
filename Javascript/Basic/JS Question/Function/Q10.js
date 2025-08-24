//10. Write a function that uses a `for` loop to calculate and return the sum of all odd numbers between 1 
//and 50. 

function odd(){
    let sum=0;
    for(i=1;i<=50;i++){
        if(i%2!=0){
            sum+=i;
        }
    }
    return sum;
}

let result=odd();
console.log(result);