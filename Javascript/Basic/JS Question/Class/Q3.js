//3. Create a Rectangle class with length and width. Add a method area() that returns the area. 
//Create a rectangle and print its area.

class Rectangle{
    constructor(length,width){
        this.length=length;
        this.width=width;
    }

    area=()=>{
        console.log(`Area of a Rectangle is ${this.length*this.width}`);
    }
}

let rectangle1=new Rectangle(45,2);
rectangle1.area();
let rectangle2=new Rectangle(5,2);
rectangle2.area()