//11. Write a function that uses a `for` loop to print all numbers between 1 and 100 that are divisible by 5.

function numbers(){
    for(i=1;i<=100;i++){
        if(i%5==0){
          console.log(i);
        }
    }
}

numbers();