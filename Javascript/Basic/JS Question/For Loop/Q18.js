//18. Print First 5 Prime Numbers: Write a loop to print the first 5 prime numbers. 

let count = 0;
let num = 2;

while (count < 5) {
    let isPrime = true;

    // Check for divisibility from 2 to num - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    // If prime, print and increase count
    if (isPrime) {
        console.log(num);
        count++;
    }

    num++;
}