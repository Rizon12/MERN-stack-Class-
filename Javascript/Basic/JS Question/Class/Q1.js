//1. Create a class Student with properties name, rollNo, and grade. Add a method display() 
//that prints the student’s details. Create 3 students and call display() for each.

class Student{
    constructor(name,rollNo,grade){
        this.name=name;
        this.rollNo=rollNo;
        this.grade=grade;
    }
    display=()=>{
        console.log(`Student name is ${this.name} and roll number is ${this.rollNo} and grade is ${this.grade}`);
    }
    
}
let s1=new Student('Ram',1,'Five');
s1.display();
let s2=new Student('Rizon',2,'Six');
s2.display();
let s3=new Student('Alex',3,'Seven');
s3.display();