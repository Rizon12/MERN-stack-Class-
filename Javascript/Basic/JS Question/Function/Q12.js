//12. Write a function that uses a `for` loop to print the first 10 numbers in the Fibonacci sequence. 

function fibonacci() {
    let a = 0, b = 1;
    console.log(a); // First number
    console.log(b); // Second number

    for (let i = 2; i < 10; i++) {
        let next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
fibonacci();