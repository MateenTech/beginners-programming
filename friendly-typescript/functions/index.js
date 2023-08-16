// Parameters type
function userInfo(name, age) {
    console.log(`Hi! this is ${name}, and I am ${age} years old.`);
}
userInfo("Ali", 14);
// return type of function
// function that returns nothing goes with type 'void'
function greet(name) {
    console.log(`Hello! ${name}.`);
}
greet("John");
// function that return the data should be defined type explicitly
function sum(x, y) {
    const z = x + y;
    return z;
}
console.log(sum(2, 6));
export {};
