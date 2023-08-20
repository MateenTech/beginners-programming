// In an array you can store multiple values in single variable with multiple data type;

// An Array is declared with open square bracket and closing square bracket;
// and each data inside arrays is called element and it's entry is separated by (,)

const myArray = ["Chips", 12, 2.5, true, false, "Almonds"]; /* Storing multiple data value in single array 
variable */
console.log(myArray);

// You can access each element using indexes like 'strings'
// but in an arrays it's also called entry;
let firstEleMyArray = myArray[0]; // give me first element in myArray[0] which is at place 0;
console.log(firstEleMyArray);


// arrays inside an array is call multi-dimensional arrays 
const multiDimenArr = [
    ["Pakistan", "Islamabad"],
    ["Turkey", "Ankara"],
    ["America", "Washington D.C."]
];

// Using entry[indexes] you can access multi-dimensional array;

// get the capital of 'Turkey' from array

// 1. first we access the sub-array of where "Turkey" is
const subArrayTurk = multiDimenArr[1]; // ["Turkey", "Ankara"]
const elemSubArrTurk = multiDimenArr[1][1]; 
console.log(elemSubArrTurk); // Ankara

const elemUSA = multiDimenArr[2][1] // go to sub-array at index 2 and take element at index 1;
console.log(elemUSA); // Washington D.C.



// Create a multi-dimensional array of shoppingList
/*
    where each sub-array's first element is string data for item's name,
    and second element should be number data which would be the quantity
    of that item.

    Make sure there should be at least five sub-arrays
*/

const shoppingList = [
    ["Bananas", 12],
    ["Chocolate Bars", 12],
    ["Honey Jar", 2],
    ["Peanut Butter Jar", 2],
    ["Eggs", 12]
];

console.log(shoppingList);



// Array methods

// .push() method pushes the one or more items at the end of array
const nums = [20, 5, 19];

nums.push([23, 56]);
console.log(nums); // [ 20, 5, 19, [ 23, 56 ] ]

// .pop() method pops off the last element from the array and returns it
const removedFromLast = nums.pop();
console.log(removedFromLast); // [ 23, 56 ]

// .shift() method works as pop(), instead of removing from last it removes first element
const removedFromFirst = nums.shift();
console.log(removedFromFirst) // 20

// .unshift() method works same as push(), instead of appending element at last it appends at first
nums.unshift(69, 56, 78);
console.log(nums)