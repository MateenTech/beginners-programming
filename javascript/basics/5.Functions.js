//  In JavaScriptm we can divide up our code into reusable parts called 'functions'.

/*
    Function is declared with 'function' keyword with name of function
    adding parentheses and ending with open and end curly{} brackets,

    As follow:
*/

// you can give any name to function
function myFunc() {
    // All code goes inside curly brackets

    console.log("Hello from function");

}

// You can call/invoke a function by it's name followed by parentheses:
myFunc(); // each time you function, it run's the code inside it in this case: Hello from function
myFunc();



// Passing Values to Functions with Arguments


/*
    Parameters are variable that act as placeholder to store values
    that are to be input to a function when it is called.
    When the function is called the input(or values) that are passed
    during function calling are called arguments;

    When the function is delcared we have to defined parameters inside
    parantheses,
*/

function myFuncParams(param1, param2) { // you can define as much parameters as you want or requied with suitable name
    console.log("First argument: " + param1, "Second argument: " + param2);
}
myFuncParams(1, 5); // passed arguments/inputs or two values for placeholder parameters


function sum(firstNum, secNum) {
    const add = firstNum + secNum;
    console.log(add);
};
sum(3, 3);

function quotient(firstNum, secNum) {
    const quotient = firstNum / secNum;
    console.log(quotient);
};
quotient(100, 5);



// Return value from Function using return Statement
/*
    We can passed inputs in function using arguments, and
    with return statement function sends back the value out of
    function;
*/

function greet(userName) {
    return "Hello! " + userName;
}
const returnedValue = greet("Mateen"); // You can also store the function's returned value in variable for later use;

console.log(returnedValue); // now returnedValue variable has the value of whatever the function returns, in this  case : Hello! Mateen




/*
                            Global Scope and Functions

    In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

    Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

*/

let myGlobal = "Hi! I am Global";

function checkScope() {
    oopsGlobal = "Watch Out!!! I am everywhere";
    console.log(myGlobal);
}

checkScope();
console.log(oopsGlobal);




/*
                            Local Scope and Functions

    Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

    Here is a function myTest with a local variable called loc.

    function myTest() {
    const loc = "foo";
    console.log(loc);
    }

    myTest();
    console.log(loc);
    The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

    The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

*/

function checkLocalScope() {
    let thisIsLocal = "Hi I am Local Scope inside Function!";
    console.log(thisIsLocal);
}
checkLocalScope();
// console.log(thisIsLocal); // ReferenceError: thisIsLocal is not defined





/*
                        Global vs. Local Scope in Functions
    It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

    In this example:

    const someVar = "Hat";

    function myFun() {
    const someVar = "Head";
    return someVar;
    }
    The function myFun will return the string Head because the local version of the variable is present.
*/