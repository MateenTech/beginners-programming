// Creating Objects
/*
    Objects can be thought of as a key/value storage, like a dictionary.

    Objects are an structured way of representing data
    using properties/keys: value pair

    const objName = {
        prop/key: value
    }

    prop/key can be anything number of naming string
*/

// Initializing Object and it's property:value
const myDog = {
    name: "Safari",
    legs: 4,
    "body color": "light golden",
    "eye color": "black",
    friends: ["ludos"],
};

// Accessing Object value using dot notation (objName.propName)
let dogName = myDog.name; // accessing and storing in variable
console.log(dogName); // Safari

/*
    Accessing using bracket notation

    If there is space between proper use brackets to access and prop name

    objName["prop name"]
*/
let dogEyeClr = myDog["eye color"];
console.log(dogEyeClr); // black

// You can also store prop name in a variable to access through that variable
let accessProp = "body color";
let dogClr = myDog[accessProp];
console.log(dogClr) // light golden

// what if there's a prop/key of number
const players = {
    10: "Messi",
    7: "Ronaldo"
};
let getProp = 7;
const getPlayer = players[7];
console.log(getPlayer);


/*
                Updating Object Properties
   
    After you've created a JavaScript object, you can update its properties at any 
    time just like you would update any other variable. 
    You can use either dot or bracket notation to update.
*/

// Before Updating
console.log(myDog.name); // Safari

// After Updating
myDog["name"] = "Nazly";
console.log(myDog.name); // Nazly


/*
                Add New Properties to a JavaScript Object
    You can add new properties to existing JavaScript objects 
    the same way you would modify them.
*/

// before: 'bark' property doesn't exists;
console.log(myDog);

// After;
myDog["bark"] = "bow-bow";
console.log(myDog);
console.log(myDog.bark);


/*
    Delete an object's property using 'delete' operator, 
    by accessing object's prop

    delete myObj.prop
*/
// Now I want to delete that bark prop
// Before
console.log(myDog); // 'bark' prop exists

// After
delete myDog.bark // you can also write bracket notation myDog["bark"]
console.log(myDog); // 'bark' prop has been deleted



/*
    Testing Objects for Properties

    To check if a property on a given object exists or not, you can use the .hasOwnProperty() method.
    someObject.hasOwnProperty(someProperty) returns true or false depending on if the property
    is found on the object or not.
*/

const article = {
    title: "Learn basics of JavaScript",
    author: "Mateen Bhutto",
    skills: ["HTML5", "CSS3", "JavaScript", "ES6", "ReactJS"],
    tags: ["Technology"],
    getIntro: function (profession) {
        return `Hi I am ${this.author}, and I am ${profession}.`;
    }
};
console.log(article.getIntro("Developer")) // example of function inside object

function checkPropExists(obj, prop) {
    return obj.hasOwnProperty(prop); // returns either true or false
};
const getBool = checkPropExists(article, "title")
console.log(getBool);

// Practice
function getValue(obj, checkProp) {
    let result = "";
    if (obj.hasOwnProperty(checkProp)) {
        result = obj[checkProp];
    } else {
        result = "Didn't found the property!";
    }

    return result;
}
console.log(getValue(article, "author"))


/*
                Accessing Nested Objects
    The sub-properties of objects can be accessed by 
    chaining together the dot or bracket notation.
*/

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const passengerSeatCont = myStorage.car.inside["passenger seat"];
console.log(passengerSeatCont);