// rest and spread (...)

//spread:
// const user = {
//     name: 'Ram',
//     age: 45,
// };

// const newUser = {
//     phone: 9812616025,
//     ...user,
// };
// console.log(newUser);

// const items = [1,2,3,4,5,6]
// const newItems=[12,14,15,...items]
// console.log(newItems);

// const user = {
//   name: "Ram",
//   age: 45,
// };

// console.log(user);

// rest:

// function sum(...data) {
//     // console.log(data)
//     let s=data.reduce((acc,item)=>{
//         return acc+item;
//     },0)
//     return s;
// }
// console.log(sum(1,2,3,99,4,4,5,6,7,8,9));


//default paremeter: When user didnt print anything, that time it is used to print default values...
// const print=(name='ram', age=0)=>{
//     console.log(name);
//     console.log(age);
// }
// print('Sita',15);



// const print=(user={}, nums=[])=>{
//     console.log(user);
//     console.log(nums);
// }
// print({Name:'Rizon'}, [5,6]);

// Object De-Structure
// const user={name: "Rizon", age: 20, phone:9812616025};
// const {name,age, phone}=user
// console.log(name);
// console.log(age);
// console.log(phone);


// const list=[1,2,3,4,5,6,7,990,44,4,5,55]
// const [a,b,c,d,e,...w]=list;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(w)

//Write a function that will take a collection of number and find the sum of even number from the given collection.

// const sum=(...data)=>{
//     console.log(data);


//     filterItem=data.filter((item)=>{
//         return item%2==0;
//     });

//     let s=filterItem.reduce((acc,item)=>{
//         return acc+item;
// },0)
// return s;
// }
// let y=sum(1,2,34,5,6,6);
// console.log(y);

