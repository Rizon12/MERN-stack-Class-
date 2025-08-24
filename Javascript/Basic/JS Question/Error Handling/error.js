//Types of Error:
//Compile-Time Error: 
// -Syntax Error 
//Run-Time Error:
// -Reference Error
// -TypeError

// try{
//     console.log(x);
// }catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }
// console.log('Hii');


// try{
//     if (true){
//         throw new Error('My Error')
//     }
// }catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     // console.log(err.stack);
// }
// console.log('Hii');

// class MyError extends Error{
//     constructor(message, name){
//         super(message);
//         this.name=name;
//     }
// }
// if(true){
//     try{
//         throw new MyError('Mero error hai','Sipalaya');
//     }catch (error){
//         console.log(error.name);
//         console.log(error.message)
//     }
// }

// class Rizon extends Error{
//     constructor(message,name){
//         super(message);
//         this.name=name;
//     }
// }
// if(true){
//     try{
//         throw new Rizon('Error From Tkp Kailali','Rizon');
//     }catch (error){
//         console.log(error.name);
//         console.log(error.message);
//     }
// }

