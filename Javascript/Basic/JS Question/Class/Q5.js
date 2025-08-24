// 5. Inheritance Practice: 
// o Create a Vehicle class with brand and color. 
// o Create a Bike class that extends Vehicle and adds engineCC. 
// o Create an object of Bike and print all properties. 

class Vehicle{
    constructor(brand,color){
        this.brand=brand;
        this.color=color;
    }
}
class Bike extends Vehicle{
    constructor(brand,color,engineCC){
        super(brand,color);
        this.engineCC=engineCC;
    }
    display=()=>{
        console.log(`Brand: ${this.brand}, Color: ${this.color}, Engine: ${this.engineCC}cc`);
    }
}

const myBike = new Bike('Yamaha', 'Black', 150);
myBike.display();
