// 4. Write a function that capitalizes the first letter of each word in a string. 
// Example: "hello world" → "Hello World" (5 marks)

let capitalizes=(word)=>{
    return word.charAt(0).toUpperCase() +word.slice(1);
    };
console.log(capitalizes('rizon'));
