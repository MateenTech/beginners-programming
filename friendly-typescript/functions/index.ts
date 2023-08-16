// Parameters type
function userInfo(name: string, age: number) {
    console.log(`Hi! this is ${name}, and I am ${age} years old.`);
}

userInfo("Ali", 14);


// return type of function

// function that returns nothing goes with type 'void'
function greet(name: string): void { // type (void)
    console.log(`Hello! ${name}.`);
}
greet("John");


// function that return the data should be defined type explicitly
function sum(x: number, y: number): number { // return data of type number
    const z = x + y;
    return z;
}
console.log(sum(2, 6));