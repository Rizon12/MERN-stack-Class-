//13. Sum of First 5 Odd Numbers: Use a loop to calculate the sum of the first 5 odd numbers (1, 3, 5, 7, 9). 

let sum=0;
for(let i=1;i<=5;i++){
    if(i%2!=0){
        sum+=i;
    }
}

console.log(sum);