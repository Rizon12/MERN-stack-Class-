
console.log('This is Function class');
//syntax:
// function print(){
//     console.log('Hello I am Rizon');
// }
// print();

// function sum(){
//     console.log(1+2);
// }
// sum();

// function sub(){
//     console.log(3-2);
// }
// sub();

// function add(a,b){
//     // console.log(a+b);
//     return a+b;
// }
// 1st method to call function when we have used: console.log(a+b);
// // add(1,2);
// // add(5,6);
// 2nd method to call function when we have used: return a+b;
// console.log(add(1,3));

// 3rd method for:  return a+b;

// let z=add(100,200);
// console.log('The addition of two number is:',z);


// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }

// function div(a,b){
//     return a/b;
// }

// function mul(a,b){
//     return a*b;
// }

// console.log(add(200,100));
// console.log(sub(200,100));
// console.log(div(200,100));
// console.log(mul(200,100));

// Write a function that will calculate the sum of n natural number: 
// function nsum(x){
//     let sum=0;
//     for(i=1;i<=x;i++){
//         sum+=i
//     }
//     return sum;
// }
// console.log(nsum(2))

// function even(x){
//     let sum=0;
//     for(i=1;i<=x;i++){
//         if(i%2==0){
//           sum+=i;  
//         }
//         }
//         return sum;
// }
// console.log(even(5))

// function prime(x){
//     let prime=true;
//     for(let i=2;i<x;i++){
//         if (x%i==0){
//             prime = false;
//             break;
//         }
//     }
//     if (prime){
//         console.log(`${x} is a prime number`);
//     } else {
//         console.log(`${x} is not a prime number`);
//     }
// }
// prime(7);

// Write a function that will calculate the factorial of n number:

// function fmul(x){
//     let mul=1;
//     for(let i=1;i<=x;i++){
//         mul*=i;
//     }
//     return mul;
// }
// console.log(fmul(5));


// Types of Function:
// arrow function
// annonymous function
// normal function
//immediatly invoke function
//Callback function

// arrow function:
// 1st method:
// const sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(4,5);

// const sub=(a,b)=>{
//     console.log(a-b);
// }
// sub(5,4);

// const mul=(a,b)=>{
//     console.log(a*b);
// }
// mul(5,4);

// const div=(a,b)=>{
//     console.log(a/b);
// }
// div(6,2);

// 2nd method:

// const sum=a=>a+5;

// let y=sum(4);
// console.log(y);



// immediatly invoke function

// (function(){
//     console.log('Hello')
// }) ()

//Callback Function
// Example
// const sum = (a,b)=>{
//     console.log(a+b);
// }
// const parent = ()=>{
//     console.log('parent');
//     sum(1,2)
// }
// parent();

//  const parent =(a)=>{
//     console.log('Parent');
//     a(5,4);
//  }

//  parent((a,b)=>{
//     console.log(a+b);
//  })


//  write a function that will calculate the factorial of n number:

//  const parent=(x)=>{
//     x(5)
//  }
//  parent((a)=>{
//     let mul=1
//     for(i=1;i<=a;i++){
//         mul*=i;
//     }
//     console.log(mul);
//     //return mul
//  })

 //Write a callback function that check a given number is prime number or not
//  const prime=(p)=>{
//     p(10);
//  }
//  prime((z)=>{
//     let prime=true;
//     for(let i=2;i<z;i++){
//         if(z%i==0){
//             prime = false;
//             break;
//         }
//     }
//     if (prime){
//         console.log(`${z} is a prime number`);
//     } else {
//          console.log(`${z} is not a prime number`);
//     }
//  });


//Scope
// {
//     var y=5
//     console.log(y)
// }
// console.log(y)
// //Here we didnt get error even we have declared var inside the block scope because var is global scope variable.

// Array

let arr=[1,2,3,4,5,6,7]
for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
    if(i%2==0){
        console.log(i)
    }
}
