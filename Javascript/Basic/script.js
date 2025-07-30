// console.log('Hello, World!'); // This will log to the console
// // console.error('This is an error message'); // This will log an error to the console
// // alert('Hello, World!'); // This will show an alert box
// document.writeln('Hello, World!'); // This will write to the document

// prompt('Enter your name:'); // This will prompt the user for input
// // confirm('Are you sure?'); // This will show a confirmation dialog

// let x=prompt('Enter Your name:'); // Prompting user for a name
// console.log(x); // Logging the input to the console
// document.writeln(x); // Writing the input to the document



// console.log(500+500); // Logging the result of an addition operation
// console.log(500-500); // Logging the result of a subtraction operation
// console.log(500*500); // Logging the result of a multiplication operation
// console.log(500/500); // Logging the result of a division operation
// console.log(500%500); // Logging the result of a modulus operation
// console.log(500**500); // Logging the result of an exponentiation operation
// console.log(500>500); // Logging the result of a greater than comparison
// console.log(500<500); // Logging the result of a less than comparison
// console.log(500>=500); // Logging the result of a greater than or equal to comparison
// console.log(500<=500); // Logging the result of a less than or equal to comparison


// console.log(500==500); // Logging the result of an equality comparison
// console.log(500===500); // Logging the result of a strict equality comparison


// //Data Types
// variable name rules
// operators
// conditional statements
// loop
// switch case
// Array(method)
// object(method)
// string(method)
// functions
// class & objects


// let x = 10; // Declaring a variable x and assigning it the value 10
// let y = 30; // Declaring a variable y and assigning it the value 20
// let z = x + y; // Adding x and y and storing the result in z
// console.log(z); // Logging the value of z to the console


// let name='Rizon'
// console.log(name)

// console.log(typeof(name))  //HELPS TO IDENTIFY WHICH DATA TYPE IS THERE.


// name2= 'Ankit'
// console.log(name2)
// console.log(typeof(name2))



// FOR BIGINT:
// Method 1:
// let bigint=1555566323321321321321321313213n
// console.log(bigint)


// Non_primitive Data_Type:
// 1. Array
// 2. Object
// 3. Function


// let vs var vs const

// What Is Hoisting?
// Hoisting is JavaScript’s way of moving declarations (not initializations) to the top of their scope during the compilation phase. 
// This means you can technically use variables and functions before they’re declared in your code.
//This actually happens in var.

// eg: 
// console.log(name); // undefined
// var name = "Rizon";


// let arr= [1,2,3,4];
// console.log(arr[0]);
// console.log(typeof arr);


// let user= {
//     name: 'Rizon',
//     phone: 9812616025
// };

// console.log(typeof user);

// console.log(user);
// console.log(user.phone);

// function add(){
//     console.log('Hello this is me Rizon')
// }

// add();


// function add(a,b){
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
// }
// add(2,5);

// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators: +,-,*,/, **,%,++,--
// Assignment Operators: =,+=,-=,*=,/=,%=,**=
// Comparison Operators: ==, ===, !=, !==, >,<, >=,<=,?
// String Operators:
// Logical Operators: &&, ||, !
// Bitwise Operators: &, |, ~, ^, <<, >>, >>>
// Ternary Operators: ?: 
// Type Operators : 


// let x=10;
// let y=20;
// console.log(x+y);

// types of increament and decrement:
// 🔼 Post Increment: variable++
// let x = 5;
// console.log(x++); // prints 5, then x becomes 6

// // 🔽 Post Decrement: variable--
// let y = 5;
// console.log(y--); // prints 5, then y becomes 4

// // 🔽 Pre Decrement: --variable
// let a = 5;
// console.log(--a); // x becomes 4, then prints 4

// // 🔼 Pre Increment: ++variable
// let b = 5;
// console.log(++b); // x becomes 6, then prints 6

// x=5;
// x+=5;
// console.log(x);


// let a= 10;
// b=5;

// console.log(a==b);



//Switch:

// Eg:

// let type= 'a';
// switch (type){
//     case 'a':{
//          console.log('a');
//         break;
//     }
//     case 'b': {
//         console.log('b');
//         break;
//     }
//     case 'c': {
//         console.log('c');
//         break;
//     }
//     default: {
//         console.log('default');
//     }
// }

// Another Example:
// console.log('Please tell Your age');
// let age= 20;
// switch(true){
//     case age <= 0: {
//         console.log('Not Born');
//         break;
//         }
//     case age <= 13: {
//         console.log('Child');
//         break;
//     }    
//     case age <= 20:{
//         console.log('teen');
//         break;
//     }
//     case age <= 40: {
//         console.log('Young');
//         break;
//     }

//     default :{
//         console.log('default');
//     }
//     }


// console.log('Grding System in JavaScript');
// let number= 66;
// switch(true){
//     case number<=29 && number>=0: {
//         console.log('Fail');
//         break;
//         }
//     case number>=30 && number <40: {
//         console.log('d');
//         break;
//     }    
//     case number>=40 && number<50:{
//         console.log('c');
//         break;
//     }
//     case number>=50 && number<60: {
//         console.log('c+');
//         break;
//     }
//      case number>=60 && number<70: {
//         console.log('B');
//         break;
//     }
//      case number>=70 && number<80: {
//         console.log('B+');
//         break;
//     }
//      case number>=80 && number<90: {
//         console.log('A');
//         break;
//     }
//      case number>=90 && number<=100: {
//         console.log('A+');
//         break;
//     }
//     default :{
//         console.log('default');
//     }
//     }


// Loop in js:
// 1. for Loop
// 2. while loop
// 3. do while loop

// 1. for loop:

// for(let i=0;i<=10;i++){
//     console.log('My name is Rizon');
// }
// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// for(let i=100;i<=200;i++){
//     console.log(i)
// }

// for(let i=20;i>=1;i--){
//     console.log(i)
// }

// Print even numbers from 1-20:

// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Q1. print 1-100
// for(let i=1; i<=100;i++){
//     console.log(i);
// }

//Q2. find sum of all 1-100
// let sum=0;
// for(i=1;i<=100;i++){
//    sum+=i;
// }

// console.log(sum);

//Q3. find total even number from 1-100

// let x=0;
// for (i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//         x++;
//     }
// }

// console.log("Total even number are:",x);

//Q4. find the sum of all even number from 1-100 (2+4+6....100)

// let sum=0;
// for(i=1;i<=100;i++){
//     if(i%2==0){
//         sum+=i;
//     }
// }
// console.log(sum)


//Multiplication table of 7

// let x=7;
// for(i=1;i<=10;i++){
//     console.log(`${x} * ${i} = ${x*i}`)
// }


// let a=7;
// let b=12;

// let x= (a+b)**2
// console.log('(a+b)^2=',x)

// let y=a**2+2*a*b+b**2
// console.log('a^2+2ab+b^2=',y)
// if(x===y){
//     console.log('LHS RHS Proved');
// }

// else{
//     console.log('LHS Not proved')
//}

//While loop:
// let i=0;
// while(i<=10){
//     console.log(i)
//     i++;
// }

//100-1
// let i=100;
// while(i>=0){
//     console.log(i);
//         i--;
// }

// Its Example to use:
// let x= Number(prompt("Enter 1 to continue or Enter any number to terminate"));
// while( x==1){
//     let fullName= prompt("Enter fullName");
//     console.log(fullName);
//     x= Number(prompt("Enter 1 to continue or Enter any number to terminate"));
// }


// Make a program to take number input infinite times until user is giving yes and provides the sum of the number if user gives no.
// let x= prompt("Enter yes to continue or no to terminate");
// let sum=0
// while(x=="yes"){
//     let numbers= Number(prompt("Enter any numbers:"));
//     sum+=numbers;
//     x= prompt("Enter yes to continue or no to terminate");
// }

// do while loop:
// let i=0;
// do {
//     console.log(i);
//     i++;
// } 
// while(i<=10);

// let i=1;
// do {
//     console.log(`7 X ${i}= ${7*i}`)
//     i++;
// }
// while(i<=10);