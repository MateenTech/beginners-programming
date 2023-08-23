// Match Single Character with Multiple Possibilities

/*
    You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

    For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.
*/

let quote = "\"Don't stop when you're tired, stop when you are done.When you feel tired and you just want to stop than ask yourself what if you did one more and again one more.\".";
let multiRegexMatch = /[aeiou]/ig;
let vowelsInQuote = quote.match(multiRegexMatch);
console.log("Quote: ", quote);
console.log("Number of Vowels: ", vowelsInQuote.length);
