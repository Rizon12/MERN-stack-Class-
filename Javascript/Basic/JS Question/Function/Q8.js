//8. Write a function that uses a `for` loop to print all multiples of 3 between 1 and 30. 
function printMultiplesOf3() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}
printMultiplesOf3();