// Single line comment syntax
/*
 multi-line 
 comment syntax
*/

/*
    In programming, a variable is a place where 
    you can store data.

    A variable works like storage, like a bookshelf 
    where you keep/store books and when you need a book
    just pick from shelf, Likewise we store/keep data in
    variable and call variable name to use data in that 
    variable.
*/

// declare a variable with (var) keyword
var myVar; // declared variable with (var) and gave it a name myVar. You can give any name you want
myVar = 2; // assigning data/value of 2 to variable of name 'myVar'


// You can also assing the value/content of first variable to anthor;
var x;
x = 3; // x has value 3
console.log("x: ", x); // 3

var y;
y = x; // now the value of x which is 3 is assigned to variable y
console.log("y: ", y); // 3


/*
    Data Types: 
    
    1. Numbers: any type of number (Whole No, Integer No, Decimal No) are data type of Number
    2. Strings: any data/characters inside single('') or double("") quotes are data type of Strings
    3. Boolean: boolean data type can be either one of two true/false
    4. Objects: Objects are key:value pairs data
    5. Arrays: Arrays are special kind of Object where you can store multi-data type value in single variable
    6. Undefined: undefined is a value that is not defined
    7. Null: Null is also special kind of value for empty value
 */


//                                       Number Data

// Declared variables have initial value of undefined
// becuase we have assigned any data;
var myNum;
console.log(myNum); // undefined

myNum = 6; // assigning value 6 to myNum variable
console.log(myNum);

var myPoints;
myPoints = 9.5; // assigning decimal number value 
console.log(myPoints);

//                                        String Data
var myName;
console.log(myName); // undefined

myName = "Mateen";
console.log(myName);


// Always provide an initial value to any variable you are declaring of a specifice data
// Let's see why:

var myScore; // initial value of any delcared vairable is undefined
console.log(myScore); // undefined

myScore = myScore + 10; // I am adding 10 to myScore variable, and assigning it to itself
console.log(myScore); // NaN "Not a Number"

// So it is always good to initialize any variable with initial value
var myAge = 12;
myAge = myAge + 1; 
console.log(myAge); // 13


var myStr = "Learning code is"; // Initializing variable of data type string
var myAdjective = " awesome";


// Difference between declaretion of variable with let & var ;

// Delcaretion of variable with 'var' can override the variable with same name
// As below first variable value has overriden by second variable
// It would cause problem when code gets bigger and hard to find bugs and errors
var myNoun = "table"
console.log(myNoun); // table

var myNoun = "chair"
console.log(myNoun); // table


// For this problem JavaScript introduced new version in ES6 is 'let' keyword
// variable delcared with 'let' will give error for variable with same name
// it'll give syntax error
let company = "Facebook";
// let company = "Amazon"; // SyntaxError: Identifier 'company' has already been declared

/*
        So the best practice is to use 'let' instead of 'var'
*/


// Changing the value;
let num = 0; // num has initial value of 0;
console.log(num); // 0

num = 10; // using assignment operator (=) value 10 is assigned to num
console.log(num);


// const and let 
// You declare the variable with const that you want to remain constant 
// which cannot be re-assigned
const country = "Pakistan";
// country = "America"; // TypeError: Assignment to constant variable.

const adjective = "awesome!";
let mySentence = "The weather is "
console.log(mySentence + adjective); // combining/concatenating both strings

mySentence = "Learning to code " // changed the value
console.log(mySentence + adjective); // combining/concatenating both strings