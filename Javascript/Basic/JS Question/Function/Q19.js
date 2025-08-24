//19. Write a function that uses a `for` loop to print all numbers from 1 to 100 that are divisible by both 2 
//and 5.

function numbers(){
    for(i=1;i<=100;i++){
        if(i%2==0 && i%5==0){
            console.log(i);
        }
    }
}
numbers();