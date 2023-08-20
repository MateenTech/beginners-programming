// Rest Parameter with Function Parameters

/*
    In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
*/

function nthArgs(...args) {
    return "You have passed " + args.length + " arguments";
}
console.log(nthArgs(2,3,5));
console.log(nthArgs(2,3,5, ["a", "b"], {name:"rest"}));


/*
    Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
*/

const sum = (...args) => {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
};

console.log(sum(2,6,1,7,9))