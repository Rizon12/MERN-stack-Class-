//5. Given an array of boolean values, filter out the `true` values. 

let arr = ['True', 'False', 'True', 'True', 'False'];

let newArr = arr.filter((x) => x !== 'True');

console.log(newArr);