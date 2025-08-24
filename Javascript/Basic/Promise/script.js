console.log("This is all about Promise");

//for Time: if we do new Date() only then it will show UK Time if we add toString() then it will show System Time...
// let date=new Date()
// console.log(date.toString());

// setTimeout(()=>{
//     console.log('It set time to show the output or execute the problem');
// },2000)

// setInterval(()=>{
//     console.log('This helps to execute the problem infinite time in each given time.')
// },1000)

// const myFunction=()=>{
//     let date = new Date();
//     while (new Date() - date < 2000){

//     }
//     console.log('While')
// }
// myFunction();
// console.log('End');

// const myPromise= new Promise((resolve, reject)=>{
//     let isTrue=true

//     if(isTrue){
//         resolve('Send Data');
//     }
//     else{
//         reject('Rejected');
//     }
// })
// myPromise.then((data)=>{
//     console.log('Data:-',data)
// }).catch((error)=>{
//     console.log('Error:-', error)
// })

// const myPromise = new Promise((resolve, reject) => {
//     let isTrue = true;

//     setTimeout(() => {
//         if (isTrue) {
//             resolve('Send Data');
//         } else {
//             reject('Rejected');
//         }
//     }, 2000);
// });

// myPromise
//     .then((data) => {
//         console.log('Data:-', data);
//     })
//     .catch((error) => {
//         console.log('Error:-', error);
//     });

//API: https://dummyjson.com/products/add
// http Protocol > https
// domain > //dummyjson.com
// End Point > products/add
// http method:- patch(single)/put(update all)-(update), delete, get(read), post(Create)

//jsonData = JSON.stringify(user) >>> Json data
//objectData=JSON.parse(jsonDta) >>> object Data
//json
// let userJson={
//     'name':'ram',
//     'age':30
// }

// let user={
//     name: 'ram',
//     age:30
// }
// let jsonData = JSON.stringify(user); //this will give object into Json Data
// console.log(jsonData);

// let objectData=JSON.parse(jsonData);// this will give Json Data into js object
// console.log(objectData);

// const getData= ()=>{

//     let res=fetch('https://dummyjson.com/products')
//     console.log(res);
// }

// getData()

// const getData= ()=>{

//     fetch('https://dummyjson.com/products').then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// getData()

// const getData= ()=>{

//     fetch('https://dummyjson.com/products')
//     .then((data)=>{
//         return data.json();
//     })
//     .then((d)=>{
//         console.log(d);
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
// }

// getData()

// const getData= ()=>{

//     fetch('https://dummyjson.com/recipes').then((data)=>{
//         return data.json();
//     })
//     .then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

// getData();

//async- await

// const getProduct=async()=>{
//     let res= await fetch('https://dummyjson.com/recipes');
//     res = await res.json();
//     console.log(res);
// }
// getProduct();

// const newProduct = async () => {
//   let x = await fetch("https://dummyjson.com/products");

//   // if(!x.Ok){
//   //     console.log('Error while Fetching');
//   // }
//   // console.log(x);
//   // console.log(x.products[0].title);
//   // console.log(x.products[0].price)
//   // console.log(x.products[0].category)
//   // console.log(x.products[0].description)
//   // console.log(x.products[0].discountPercentage)
//   // console.log(x.products[0].rating)
//   // console.log(x.products[0].stock)
//   // x.products.forEach((item)=>{
//   //     console.log(item.title);
//   //     console.log(item.price);
//   // })

//   // let sum=x.products.reduce((acc,values)=>{
//   //     return acc+values.price;
//   // },0)
//   // console.log(sum);
//   x = await x.json();

//   let multiplication = x.products.map((values) => {
//     return values.price * 2;
//   });
//   console.log(multiplication);
// };
// newProduct();

// Q1. Print product whose id is even.
// Q2. Find the id 21 and print that product only.
// Q3. Check id 90 product exist or not in the given product list.