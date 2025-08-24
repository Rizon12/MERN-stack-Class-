// 8. Given an array of product prices, calculate the total price. (5 marks) 

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 150 },
    { name: "Monitor", price: 300 }
];

let totalPrice=products.reduce((acc, values)=>{
    return acc+values.price;
},0)
console.log(totalPrice);