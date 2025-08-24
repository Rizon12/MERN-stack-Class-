//8. Write a function that filters out empty strings from an array. 

let arr=['Rizon','Ram','','','Ramesh'];
let newArr=arr.filter((x)=>{
    return x!=('');
})
console.log(newArr);