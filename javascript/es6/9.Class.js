/*
            Use class Syntax to Define a Constructor Function
    
    ES6 provides a new syntax to create objects, using the class keyword.

    In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.

    In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

        // Explicit constructor
        class SpaceShuttle {
        constructor(targetPlanet) {
            this.targetPlanet = targetPlanet;
        }
        takeOff() {
            console.log("To " + this.targetPlanet + "!");
        }
        }

        // Implicit constructor 
        class Rocket {
        launch() {
            console.log("To the moon!");
        }
        }

        const zeus = new SpaceShuttle('Jupiter');
        // prints To Jupiter! in console
        zeus.takeOff();

        const atlas = new Rocket();
        // prints To the moon! in console
        atlas.launch();


        ! The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

*/


class Entrepreneur {
    constructor(firstName, country, ...companies) {
        this.firstName = firstName;
        this.country = country;
        this.companies = companies;
    };
    
    getInfo() {
        return (`This is ${this.firstName}, CEO of ${this.companies}`);
    }
}

const entp1 = new Entrepreneur("Elon Musk", "USA", "Tesla", "SpaceX", "Twitter");

console.log(entp1.getInfo());


class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();




/*

    Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

    In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

    Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

    Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

    This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

    In other words, you are abstracting implementation details from the user.

*/

class Thermostat {
    constructor() {
    };

    get temperature() {};

    set temperature(updateF) {};
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)
