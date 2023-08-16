// A type alias is exactly that - a name for any type for object. The syntax for a type alias is:
function printCoord(pt) {
    console.log("The x coordinate is: " + pt.x);
    console.log("The y coordinate is: " + pt.y);
}
printCoord({ x: 2, y: 7 });
// Object of user of type UserUI
const user = {
    firstName: "Mateen",
    lastName: "Bhutto",
    id: 5237236,
    gender: "M"
};
// You can also create UserUI object array by just defining type of array,
// UserUI[] means I want an array of object type UserUI
const users = [
    {
        firstName: "Micheal",
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
console.log(users);
export {};
