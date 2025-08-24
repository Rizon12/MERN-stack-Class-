// 2. Given an array of objects representing products (id, name, price), write a 
// function that returns the product with the highest price. (5 marks)

// let arr=[
//     {id:1, name:'macbook pro', price:50000},
//     {id:2, name:'samsung galaxy',price:39000},
//     {id:3, name:'Oppo Phone',price:17000},
//     {id:4, name:'Redmi Phone',price:32000}
// ];

// let highestPrice=(products)=>{
//     return products.reduce((acc, values)=>{
//         return values.price>acc.price? values: acc;
//     })
// }
// console.log(highestPrice(arr));

let arr=[
    {id:1,name:'Macbook',price:75000},
    {id:2,name:'Samsung',price:52000},
    {id:3,name:'Oppo', price:32000},
    {id:4,name:'Redmi', price:49000}
];
let highestPrice=(x)=>{
    return x.reduce((acc, values)=>{
        return acc.price>values.price ? acc: values;
    })
}
console.log(highestPrice(arr));