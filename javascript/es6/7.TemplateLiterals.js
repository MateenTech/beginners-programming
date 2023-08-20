/*
            Create Strings using Template Literals

    A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

    Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

    In Template literal you can perform javascript operations and also add
    variables with (+) or concatination

    Use backticks(``) fro template literal strings
*/

const person = {
    firstName: "Mateen",
    lastName: "Bhutto",
    age: 21
};
const { firstName, lastName, age} = person;
const demoTemplateLit = `Hi my name is ${firstName} ${lastName}, and I am ${age} old.`;
console.log(demoTemplateLit);
