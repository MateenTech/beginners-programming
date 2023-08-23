//  Use Test to Match the String

/*
    Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

    If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

    JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
*/

const str = "freeCodeCamp";
const testStr = /Code/; // regular expression syntax
console.log(testStr.test(str)); // true

let str1 = "Hello, my name is JavaScript";
let testStr1 = /JavaScript/;
let testStr1_a = /ReactJS/;
console.log(testStr1.test(str1)); // true
console.log(testStr1_a.test(str1)); // false