//20. Write a function that uses a `for` loop to calculate and return the sum of all multiples of 3 or 5 below 
//100. 

function sumMultiples() {
    let sum = 0;
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

let result = sumMultiples();
console.log(result); // Output: 2318