//1. Write an arrow function that returns the sum of two numbers. 
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

// let arr=[1,2,3,4,5,6,7]
// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(i%2==0){
//         console.log(i)
//     }
// }

let sum=(a,b)=>(a+b);
let y=sum(4,5);
console.log(y);