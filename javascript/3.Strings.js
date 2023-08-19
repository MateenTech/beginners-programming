let firstName = "Ahmed";

// Using (+) operator with strings is called concatenate operator
// which combines two strings;
firstName += " Ali"; // concatenate "Ali" with value of fristName;  !Always include space when combine strings

console.log(firstName); // Ahmed Ali

let lastName = " Bhutto";
let fullName = firstName + lastName; /* combine the lastName value to the value of firstName and store it in fullName variable */

console.log(fullName);


// String Literal
// What if you want to add quotes inside string like;

// "Work like hell! you put 80 to 100 hours a week, every week", Elon Musk

/*
    The ways is Escaping character backslash (\)
*/
let quote1 = "\"Work like hell! you put 80 to 100 hours a week, every week\", Elon Musk";
console.log(quote1);

/*
    You can also use quotes by start and end with single ('') quotes
*/

let quote2 = '"Don\'t sleep when you are tired, sleep when you are done!", Eric Thomas';
console.log(quote2);



// .length property
/*
    You can also find the length of a string using .length propert
    .length property return the Number of length the string value has

    variable/value.length;
*/
let intro = "Hi! I am a programmer";
let introLength = intro.length; // Space in string are also counted
console.log(introLength); // 21

// find the first character in string using bracket [] notation;

/*
    In JavaScript place count's start from 0 not like 
    human count from 1;

    it's like 0 1 2 3 .....
*/

// intro[0] :return's the first character at place 0;
let introFirstChar = intro[0];
console.log(introFirstChar); // H

let introSecChar = intro[1]
console.log(introSecChar); // i

// find last character using .length;
let introLastChar = intro[intro.length - 1];
console.log(introLastChar) // r

let introNthLastChar = intro[intro.length - 2];
console.log(introNthLastChar); // e
