//3. Given an array of strings, filter out strings that have more than 3 characters. 

let arr=['Elephant','cat','dog','Apple'];

let newArr=arr.filter((word)=>{
    return word.length>3;
    
})

console.log(newArr);