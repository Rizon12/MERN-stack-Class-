//6. Filter an array of strings to include only those that contain the letter 'a'. 

let x = ['apple', 'ball', 'cat', 'bull', 'Hero'];

let newArr=x.filter((values)=>{
    return values.includes('a');
})
console.log(newArr);