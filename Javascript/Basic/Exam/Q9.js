// 9. Create a function sumAll that accepts any number of arguments and returns 
// their sum. (6 marks) 


let sumAll=(...x)=>{
    return x.reduce((acc,values)=>{
        return acc+values;
    },0)
}
console.log(sumAll(15,20))