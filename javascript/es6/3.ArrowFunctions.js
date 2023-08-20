//  Use Arrow Functions to write Concise Anonymous Functions

/*
    In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

    To achieve this, we often use the following syntax:

                    const myFunc = function() {
                    const myVar = "value";
                    return myVar;
                    }

    ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

                    const myFunc = () => {
                    const myVar = "value";
                    return myVar;
                    }

    When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

                const myFunc = () => "value";

    This code will still return the string value by default.
*/

const conciseFunc = () => new Date().toLocaleDateString();
console.log(conciseFunc());


/*
                    Write Arrow Functions with Parameters

    Just like a regular function, you can pass arguments into an arrow function.
*/

const product = (x, y) => x * y;
console.log(product(5, 10));


/*
                    Set Default Parameters for Your Functions
    In order to help us create more flexible functions, ES6 introduces default parameters for functions.

    Check out this code:

        const greeting = (name = "Anonymous") => "Hello " + name;

    The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.
*/

const increment = (num, value = 1) => num + value;
console.log(increment(2, 4)) 
console.log(increment(2))


