//25. Use `forEach` to concatenate all strings in an array into a single string and log it. 
let words = ['apple', 'ball', 'cat', 'bull', 'Hero'];
let result = '';

words.forEach(word => {
  result += word;
});

console.log(result); // Output: "appleballcatbullHero"