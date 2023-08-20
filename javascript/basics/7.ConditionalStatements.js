// Use Conditional Logic using if Statement

/*
    Syntax

    if(condition) {
        code ...
    }

    if statement is used to make decision, if statement tells the JavaScript
    to run the code on a certain condition
    The coditions are known as Boolean conditions they maybe either true or false

    if statement runs the code inside curly bracket only if the defined
    condition inside paranthese is true. If the condition provided is false 
    then the code inside curly brackets won't run
*/

function checkCondition(getBool) {
    if(getBool) {
        return "It's true!";
    }
    return "It's false!";
};

console.log(checkCondition(true));
console.log(checkCondition(false)); // because of false if won't run the code



/*
   * Comparison Operators:
    * == (equality): If the values being compared are not of the same type, the equality operator 
                    will perform a type conversion,         
    * === (strict equality): it also check data type

    * != (inequality) : left operand doesn't equal to right operand
    * !== (strick inequality): left operand strictly not equal to right operand

    * > (greater than): The greater than operator (>) compares the values of two numbers. If the 
                number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
    * >= (greater than or equal): The greater than or equal to operator (>=) compares the values 
                of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

    * < (less than): The less than operator (<) compares the values of two numbers. If the number 
                    to the left is less than the number to the right, it returns true. Otherwise, it returns false.
    * <= (less than or equal): The less than or equal to operator (<=) compares the values of two 
                    numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false
*/

const numX = 5;
let numY = "5";
if(numX == numY) { // (==) operator is performing type conversion than evaluating value
    console.log("Equal"); // Output: Equal
}

if(numX === numY) { // with (===) operator both's data type are different
    console.log("Equal"); // No Output
}

// check type of a variable's value using 'typeof' operator
console.log(typeof numX); // number 
console.log(typeof numY); // string


if(numX != numY) { // won't run code because after type conversion they are equal
    console.log("Not Equal");
}

if(numX !== numY) {
    console.log("It's true they are Not Equal!");
}


const x = 10;
const y = 15;

if(x > y) {
    console.log("X is Greater!")
}

if(x >= 5) {
    console.log("X is Greater or Equal to Y");
}

if(x < y) { // true
    console.log("X is Less than Y!");
}

if(x <= 10) {
    console.log("X is Less than or Equal!")
}

// Logical Operators
/*
 * && (AND): AND operator runs the code only if both the left and right operands are true
 * || (OR): OR operator runs the code if either operand is true left or right
 */

if( x < y && x >= 10) {
    console.log("Yes! you are near");
}

let num1 = 20;
let num2 = 15;
if(num1 === num2 || num1 > num2) {
    console.log("Greate!! you passed the test")
}



// if/else statement
/*
    if the provided condition for the if statement is false 
        than 
    the code inside else statement is executed
*/

const nameRequired = "admin";
const userName = "Jordan";
if (userName === nameRequired) {
    console.log("You are the User");
} else {
    console.log("Please provide the right user!")
}

// if/else if statement 
// in else if (other condition) you can provide other condition then if

if(userName === nameRequired) {
    console.log("That's correct User");
} else if (userName === "Jordan") {
    console.log("Other user is logged in!");
} else {
    console.log("Nothing Happend!");
};

console.log("\n---------- Grades ----------\n")

const totalMarks = 100;
let obtainedMarks = 90;

console.log(`Total Marks: ${totalMarks}\nObtained Marks: ${obtainedMarks}\n`)

if (obtainedMarks < 50 && obtainedMarks >= 45) {
    console.log("You have just passed!");
} else if (obtainedMarks < 60 && obtainedMarks >= 50) {
    console.log("Congrats! You have got C!");
} else if (obtainedMarks < 70 && obtainedMarks >= 60) {
    console.log("Well Done! You have got B!");
} else if (obtainedMarks < 80 && obtainedMarks >= 70) {
    console.log("Good! You have got A!");
} else if (obtainedMarks < 90 && obtainedMarks >= 80) {
    console.log("Great! You have got A+!");
} else if (obtainedMarks <= 100 && obtainedMarks >= 90) {
    console.log("Outstanding Performance! You have got A1 :):):)");
} else  {
    console.log(":( You have got F! Do better next time :)");
}