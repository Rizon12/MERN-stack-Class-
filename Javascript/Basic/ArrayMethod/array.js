//Array Method

//forEach, map, fileter, reduce, find,

//ForEach: It is used to access the array item or values.

//map: It modifies the array item and returns new array.

//filter: It is used to filter the items from the existing array. It also returns new array.

//reduce: It is used to compute the array values and returns a single value.

//find: It help to search item in array and returns object and values.

// let arr=[1,2,3,4,5,6,7,12,21];
//forEach:
// let sum=0;
// arr.forEach((item)=>{
//   sum+=item;  
// })
// console.log(sum);

//map:
// let newArr= arr.map((values)=>{
//   return values**2;
// })
// console.log(newArr);

// let newArr= arr.map((values)=>{
//   return values%2;
// })
// console.log(newArr);

//filter:
// const filterArr=arr.filter((values)=>{
//   return values%2==0;
// })
// console.log(filterArr);


// const filterArr=arr.filter((values)=>{
//   //  return values>5 && values<8;
//   return values%2==0 && values%3==0;
// })
//  console.log(filterArr);

//reduce:
// let sum= arr.reduce((acc, values)=>{
//   return acc+values;
// },0)
// console.log(sum);

// let mul= arr.reduce((acc, values)=>{
//   return acc*values;
// },1)
// console.log(mul);

//find:
// let y=arr.find((values)=>{
//   return values==12  //if 12 given in array then it will return it...
// })

// console.log(y);

// let a=arr.includes(21);
// console.log(a);


// let x='Hello Siphalaya';
// console.log(x.includes('o'));

//Questuion test:

const productList=[
  {
    id:1,
    name:'Hello',
    description:'This is Apple Pro Product',
    price:1000
  },
  {
    id:2,
    name:'Apple Pro',
    description: 'this is Apple Pro Product',
    price: 5000,
  },
    {
    id:3,
    name:'Apple Pro Max',
    description: 'this is Apple Pro Max Product',
    price: 10000,
  },
    {
    id:2,
    name:'Samsung',
    description: 'this is Samsung Product',
    price: 400000,
  },
];

//Printing the Product details
 productList.forEach((productList1)=>{
     console.log(productList1)
 })

//Doubling the values:
 let double= productList.map((values)=>{
   return values*2;
 })
 console.log(double);