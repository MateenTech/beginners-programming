# Regular Expressions

Regular Expressions are patterns that programmer use to match, search and replace text. When matching the Regular Expression, the regex always
return's boolean value either true or false.

Syntax of Regex Pattern: /stringtomatch/;


## Use the .test() Method to Match:
``````
.test() method matches the provided regex pattern on the string passed as arguments inside parenthesis.

Syntax: regexPattern.test(strToMatch);

``````

## Match with Different Possibilities:
``````

Using OR (|) operator we can match two or more patterns by separating each pattern using OR (|)
operator

Syntax: /yes|no|maybe/;

``````

## Ignore Cases While Match Using (i) flag:
``````

Cases like "UPPERCASE", "lowercase", "Capitalized" and "UpdownCase". You can match any of these cases by using what is called flag (i).

Syntax: /igNorecase/i;

``````

## Extract Matches Using .match():
``````

So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

!! Note: that the .match syntax is the "opposite" 
   of the .test method you have been using thus far:

    'string'.match(/regex/);
    /regex/.test('string');

``````

## Find More Than the First Match:
``````

You search or extract a pattern more than once, you can use the global search flag: g.

Syntax: let moreMatch = /twinkle/ig;
        anyStr.match(moreMatch);

Any string variable having string 'twinkle' more than once.

!! Note: You can have multiple flags on your regex like /search/gi.

``````