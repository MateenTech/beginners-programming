/*
        Write Concise Object Literal Declarations Using Object Property Shorthand

    ES6 adds some nice support for easily defining object literals.

    Consider the following code:

        const getMousePosition = (x, y) => ({
            x: x,
            y: y
        });

    getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

        const getMousePosition = (x, y) => ({ x, y });
*/


const  createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    }
};

const person1 = createPerson("Mateen", 21, "M");
const person2 = createPerson("Shahzeb", 29, "M");

console.log(person1);
console.log(person2);

/*
            Write Concise Declarative Functions with ES6
    
    When defining functions within objects in ES5, we have to use the keyword function as follows:

            const person = {
            name: "Taylor",
            sayHello: function() {
                return `Hello! My name is ${this.name}.`;
            }
            };

    With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
*/

const animal = {
    type: "Horse",
    name: "Burak",
    color: "Light brown",
    getInfo() {
        return `The animal is ${this.type}, it's name is ${this.name}`;
    }
};

console.log(animal.getInfo())