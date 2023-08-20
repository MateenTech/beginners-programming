// Use the Spread Operator to Evaluate Arrays In-Place

/*
    ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

    The ES5 code below uses apply() to compute the maximum value in an array:

                var arr = [6, 89, 3, 45];
                var maximus = Math.max.apply(null, arr);

    maximus would have a value of 89.
*/

// Using Spread Operator
const arr = [5, 10, 150, 90];
const MAXIMUM = Math.max(...arr); // ...arr returns an unpacked array.
console.log(MAXIMUM);


// Copy all the content of arr1 into arr2;
const arr1 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const arr2 = [...arr1];
console.log(arr2);


// Change the content of a any one property in object using spread(...) operator
const person = {
    firstName: "admin",
    lastName: "admin",
    field: "programmer",
    skills: ["JS/ES6", "HTML5", "CSS3", "ReactJS"],
};

console.log("Before: ", person);

const person1 = { ...person, firstName: "Mateen", lastName: "Bhutto", job: "Front-End Developer"};
console.log("After: ", person1);