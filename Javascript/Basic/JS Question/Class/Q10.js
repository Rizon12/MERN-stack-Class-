// 10. Create an Animal base class with name and sound. 
// o Create a Dog class that extends Animal and has a method bark() printing "Woof 
// Woof". 
// o Create an object and call both bark() and the inherited property. 

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof Woof");
  }

  bark() {
    console.log("Woof Woof");
  }
}

const myDog = new Dog("Buddy");

myDog.bark();         
myDog.makeSound();    
console.log("Dog's name:", myDog.name); 