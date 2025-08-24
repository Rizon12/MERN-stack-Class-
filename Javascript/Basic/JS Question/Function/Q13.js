//13. Write a function that uses a `for` loop to count and return the number of digits in a given positive 
//integer.

function countDigits(num) {
    let count = 0;
    for (; num > 0; num = Math.floor(num / 10)) {
        count++;
    }
    return count;
}

console.log(countDigits(12345));