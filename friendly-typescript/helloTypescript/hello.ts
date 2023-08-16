console.log("Hello TypeScript!")


function greet(name: string, date: Date): void {
    console.log(`Hello ${name}, today is ${date.toDateString()}!`);
}

greet("Alen", new Date());