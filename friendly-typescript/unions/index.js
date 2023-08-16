// Union (|) operator units/combines on or more data type to variable;
// Unions (|) operator is telling that names variable can contain a 
// single name of string, or string arrays of names
let names = "";
names = "Ali";
console.log(names);
names = ["Ahmed", "Bilal", "John"];
console.log(names);
function getNames(users) {
    (Array.isArray(users)) ? users.forEach(user => console.log(user.toLowerCase())) : console.log(users.toUpperCase());
}
getNames("Ahmed");
getNames("Ali");
getNames(["John", "Daniel", "Steven", "Josh"]);
export {};
