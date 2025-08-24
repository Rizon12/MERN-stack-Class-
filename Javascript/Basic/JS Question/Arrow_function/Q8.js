//8. Write an arrow function that checks if a number is positive, negative, or zero. 

let check=(a)=>{
    if (a<0){
        return 'Negative';
    }
    else if(a===0){
        return 'Zero';
    }
    else{
        return 'Positive';
    }
}
console.log(check(-5));