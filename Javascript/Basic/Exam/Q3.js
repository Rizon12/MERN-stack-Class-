// 3. Create a Car class with properties brand and model, and a method getInfo() 
// that returns a string with the car details. (5 marks) 

class Car{
    constructor(brand, model){
        this.brand=brand;
        this.model=model;
    }
    getInfo(){
        return `This car is a ${this.brand} and ${this.model} model`;

    }
}
let carDetails=new Car('Mahindra', 'Thar');
console.log(carDetails.getInfo());