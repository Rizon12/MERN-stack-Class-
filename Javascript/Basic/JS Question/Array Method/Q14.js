//14. Given an array of strings, return an array of the first letter of each string using `map`. 
let arr=['Rizon','Ram','Alpha','Beta','Alex'];
let newArr=arr.map((x)=>{
    return x.charAt(0)
})
console.log(newArr);