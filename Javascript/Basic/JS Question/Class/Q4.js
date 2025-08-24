//4. Create a class Book with title and author. Add a method printDetails() that logs "Book: 
//title by author".

class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
    }
    printDetails=()=>{
        console.log(`${this.title} by ${this.author}`);
    }
}

let b1=new Book('Something Ordinary', 'Rizon Ale');
b1.printDetails();

let b2=new Book('Going Right', 'Rizon Ale');
b2.printDetails();