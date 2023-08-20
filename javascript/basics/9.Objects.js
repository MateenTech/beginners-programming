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





/*
                                        Record Collection

    You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

    The updateRecords function takes 4 arguments represented by the following function parameters:

    records - an object containing several individual albums
    id - a number representing a specific album in the records object
    prop - a string representing the name of the album’s property to update
    value - a string containing the information used to update the album’s property
    Complete the function using the rules below to modify the object passed to the function.

    Your function must always return the entire records object.
    If value is an empty string, delete the given prop property from the album.
    If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
    If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.
    Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.

*/

const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {

    if (value === "") {
        delete records[id][prop];
    } else if (prop !== "tracks" && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && value !== "") {
        if (!Array.isArray(records[id][prop])) {
            records[id][prop] = [];
            records[id][prop].push(value);
        } else {
            records[id][prop].push(value);
        }
    }

    return records
}

let data = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
console.log(data);