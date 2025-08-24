//class:
//DRY=Do Not Repeat Yourself(we follow this principle while writing code.)

// class Person {
//     constructor(name,email,phone){
//         this.name=name;
//         this.email=email;
//         this.phone=phone;
//     }
// }

// let u1=new Person("Rizon", 'rizonaale@gmail.com',9812616025)
// let u2=new Person("Rizon", 'rizonaale@gmail.com',9812616025)
// let u3=new Person("Rizon", 'rizonaale@gmail.com',9812616025)

// console.log(u1);
// console.log(u2);
// console.log(u3);

// Another Example:
// class Animal{

//     constructor(name,age,color){
//         this.name=name;
//         this.age=age;
//         this.color=color;
//     }
//     eat=()=>{//This is also called instant method
//         console.log('Eat');
//     };
// }

// let a1=new Animal('Rockey', 2,'Black');
// let a2=new Animal('Tiger', 3,'Brown');
// let a3=new Animal('Diamond', 4,'Red');
// let a4=new Animal('Tommy', 5,'White');
// let a5=new Animal('Tom', 2,'Black');

// // console.log(a1);
// // console.log(a2);
// // console.log(a3);
// // console.log(a4);
// // console.log(a5);

// console.log(a1.name);
// console.log(a1.age);
// console.log(a1.color);

// console.log(a2.name);
// console.log(a2.age);
// console.log(a2.color);

// console.log(a3.name);
// console.log(a3.age);
// console.log(a3.color);

// console.log(a4.name);
// console.log(a4.age);
// console.log(a4.color);

// console.log(a5.name);
// console.log(a5.age);
// console.log(a5.color);

// another Example:

// class Animal{

//     constructor(name,age,color){
//         this.name=name;
//         this.age=age;
//         this.color=color;
//     }
//     eat=(type)=>{//This is also called instant method
//         console.log('Eat:-',type);
//     };
// }

// let a1=new Animal('Rockey', 2,'Black');
// let a2=new Animal('Tiger', 3,'Brown');
// let a3=new Animal('Diamond', 4,'Red');
// let a4=new Animal('Tommy', 5,'White');
// let a5=new Animal('Tom', 2,'Black');

// a1.eat('Meat');
// console.log(a1)

//Another Example:
// class Animal {
//   constructor(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//   }
//   eat = (type) => {
//     //This is also called instant method
//     console.log("Eat:-", type);
//   };
//   print = () => {
//     console.log(
//       `My name is ${this.name} age:- ${this.age} , color:- ${this.color}`
//     );
//   };
// }

// let a1 = new Animal("Rockey", 2, "Black");
// let a2 = new Animal("Tiger", 3, "Brown");
// let a3 = new Animal("Diamond", 4, "Red");
// let a4 = new Animal("Tommy", 5, "White");
// let a5 = new Animal("Tom", 2, "Black");

// a1.eat("Meat");
// console.log(a1);
// a1.print();
// a2.print();
// a3.print();


//Calculator without constructor:

// class Calculator{
//     add=(a,b)=>{
//         console.log(a+b);
//     }
//     sum=(a,b)=>{
//         console.log(a+b);
//     }
//     div=(a,b)=>{
//         console.log(a/b);
//     }
//     exp=(a,b)=>{
//         console.log(a*b);
//     }
// }

// let c=new Calculator;
// c.add(1,2);


//Calculator with Constructoer:

// class Calculator{

//     constructor(a,b){
//         this.a=a;
//         this.b=b;
//     }
//     add=()=>{
//         console.log(this.a+this.b);
//     }
//     sub=()=>{
//         console.log(this.a-this.b);
//     }
//     div=()=>{
//         console.log(this.a/this.b);
//     }
//     exp=()=>{
//         console.log(this.a**this.b);
//     }
// }

// let c=new Calculator(5,4);
// c.add();
// c.sub();
// c.div();
// c.exp();


//Inheritence:

// class A {
//     constructor(name, age) {
//         this.name=name;
//         this.age=age;
//     }
// }

// class B extends A{
//     constructor(name, age, phone){
//         super(name, age);
//         this.phone=phone;
//     }
// }

// let b=new B('ram',25,9812616025);
// console.log(b);

//Another Example: Use of Inheritance:

class Animal {
  constructor(gender, age, color, name) {
    this.gender = gender;
    this.age = age;
    this.color = color;
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(gender, age, color, name, bread) {
    super(gender, age, color, name);
    this.bread = bread;
  }
}

class Person extends Animal {
  constructor(gender, age, color, name, ride) {
    super(gender, age, color, name);
    this.ride = ride;
  }
}
let p1 = new Person("male",25,"white","Ram","Yes");
let d1 = new Dog("male",5,"white","a","x");
console.log(p1);
console.log(d1);