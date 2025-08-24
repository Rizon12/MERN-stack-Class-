//7. Write an arrow function that returns the larger of two numbers. 

let larger=(a,b)=>{
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

console.log(larger(5,7));