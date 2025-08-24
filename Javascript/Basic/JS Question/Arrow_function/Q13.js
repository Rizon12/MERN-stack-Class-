// 13. Write an arrow function that returns all strings longer than 5 characters from an array. 
let characters=a=>{
    return a.filter((b)=>b.length>5);
}
console.log(characters(['Rizon','cat','football','dog','Volleyball']));

