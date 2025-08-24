//8. Create an Employee class with name, position, and salary. 
// o Add a method increaseSalary(percent) that increases the salary by a given 
// percentage. 
// o Test it with a 10% raise. 


class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  increaseSalary = (percent) => {
    this.salary=this.salary+(this.salary*percent)/100
    console.log(this.salary)
  };
}

let e1=new Employee("Pramod"," stack developer",250000)
e1.increaseSalary(10)
