// 7. Create a Person class with name and age. 
// o Add a method isAdult() that returns true if age is 18 or above, otherwise false. 
// o Create two objects and check if they are adults. 

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    isAdult=()=>{
        if(this.age>18){
            console.log('True');
        }
        else{
            console.log('False');
        }
    }
}
let p1=new Person('Rizon',22);
let p2=new Person('Ankit',20);