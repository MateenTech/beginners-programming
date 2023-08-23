// Extract Matches 

/*
    You can also extract the actual matches you found with the .match() method.

    To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

    Example:

    "Hello, World!".match(/Hello/);
    let ourStr = "Regular expressions";
    let ourRegex = /expressions/;
    ourStr.match(ourRegex);

    Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

    'string'.match(/regex/);
    /regex/.test('string');
*/

let myStr = "Learning programming from freeCodeCamp is awesome!";
let extractMatch = /freecodecamp/i;
let result = myStr.match(extractMatch);
console.log(result);