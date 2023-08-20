/* Generate Random Fractions with JavaScript */

/*
    JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.
 */

function randomFraction() {
    return Math.random(); // on each call of function, generate's random fraction number
}
console.log("Random Fraction number: ", randomFraction());
console.log("Random Fraction number: ", randomFraction());


/*
                    Generate Random Whole Numbers with JavaScript
    
    You can generate random decimal numbers with Math.random(), but sometimes you need to generate random whole numbers. The following process will give you a random whole number less than 20:

    Use Math.random() to generate a random decimal number.
    Multiply that random decimal number by 20.
    Use Math.floor() to round this number down to its nearest whole number.
    
    Remember that Math.random() can never quite return a 1, so it's impossible to actually get 20 since you are rounding down with Math.floor(). This process will give you a random whole number in the range from 0 to 19.
*/

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log("Random Whole number: ", randomWholeNum());
console.log("Random Whole number: ", randomWholeNum());