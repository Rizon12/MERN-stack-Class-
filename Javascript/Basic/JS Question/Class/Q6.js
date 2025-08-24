//6. Write a Calculator class with methods add, subtract, multiply, and divide. Create an 
// object and test all methods with two numbers. 

class Calculator {
    constructor(a,b){
        this.a=a;
        this.b=b;
    }

    add=()=>{
        console.log(this.a+this.b);
    }
    sub=()=>{
        console.log(this.a-this.b);
    }
    mul=()=>{
        console.log(this.a*this.b);
    }
    div=()=>{
        console.log(this.a/this.b);
    }
}

let c1=new Calculator(10,5);
c1.add();
c1.sub();
c1.mul();
c1.div();