console.log("Hello TypeScript!");
function greet(name, date) {
    console.log(`Hello ${name}, today is ${date.toDateString()}!`);
}
greet("Alen", new Date());
export {};
