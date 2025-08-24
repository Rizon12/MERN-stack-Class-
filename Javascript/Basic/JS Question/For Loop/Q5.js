//5. Sum of Odd Numbers: Use a loop to calculate the sum of odd numbers between 1 and 10. 
let sum=0;
for(let i=1;i<=10;i++){
    if(i%2!=0){
       sum+=i; 
    }
}
console.log(sum);