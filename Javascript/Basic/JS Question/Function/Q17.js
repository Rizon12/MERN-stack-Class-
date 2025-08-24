//17. Write a function that uses a `for` loop to find and return the smallest number greater than 0 that is 
//divisible by both 3 and 4. 

function divisible(){
    for(i=1;i<100;i++){
        if(i%3==0 && i%4==0){
            return i;
        }
    }
}
let result=divisible();
console.log(result);