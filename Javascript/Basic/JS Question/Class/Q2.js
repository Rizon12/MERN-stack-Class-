//2. Write a Car class with brand, model, and year as properties. Add a method start() that 
//prints "Car Started". Create two Car objects and call the method.

class Car{
    constructor(brand, model, year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    start=()=>{
        console.log('Car Started');
    }
}
let car1= new Car('Toyota','SUV',2018);
car1.start();
let car2= new Car('Honda','Sedan',2021);
car2.start();