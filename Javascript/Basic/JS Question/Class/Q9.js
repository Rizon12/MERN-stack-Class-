//9. Create a Shape class with a method area() that returns "Not implemented". 
// o Create a Circle class that extends Shape and implements the area() method using 
// πr². 
class Shape {
  area = () => {
    return "Not implemented";
  };
}
class Circle extends Shape {
  area = (r) => {
    let a = 3.14 * r ** 2;
    console.log(a);
  };
}
let c1 = new Circle();
c1.area(5);