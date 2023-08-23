// Match Literal String with Different Possibilities

/*
    Using 'OR' (|) operator:

    You can search for multiple patterns using the alternation or OR operator: |.

    You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.
*/

const animalKind = "I have a pet parrot.";
let multiRegex = /cat|dog|parrot|bird/;
console.log(multiRegex.test(animalKind)); // true