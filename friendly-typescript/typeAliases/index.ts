// A type alias is exactly that - a name for any type for object. The syntax for a type alias is:

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point): void {
    console.log("The x coordinate is: " + pt.x);
    console.log("The y coordinate is: " + pt.y);
}
printCoord({x: 2, y: 7});



// You can actually use type aliases for any types at all, no just only for objects
type ID = number | string;

type UserUI = {
    firstName: string;
    lastName: string;
    id: ID;
    gender?: string;
}

// Object of user of type UserUI
const user: UserUI = {
    firstName: "Mateen",
    lastName: "Bhutto",
    id: 5237236,
    gender: "M"
}

// You can also create UserUI object array by just defining type of array,
// UserUI[] means I want an array of object type UserUI
const users: UserUI[] = [
    {
        firstName:"Micheal",
        lastName: "Jordan",
        id: "MJ02491",
    },
    {
        firstName: "Nida",
        lastName: "Serez",
        id: "NS206583",
        gender: "F"
    }
];
console.log(users)