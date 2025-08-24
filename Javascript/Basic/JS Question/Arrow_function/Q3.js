//3. Write an arrow function that checks if a number is even or odd. 


//Callback Function:
let parent=(x)=>{
    x(10);
}
parent((a)=>{
    if(a%2==0){
        console.log('Number is Even');
    }
    else {
        console.log('Number is Odd');
    }
})