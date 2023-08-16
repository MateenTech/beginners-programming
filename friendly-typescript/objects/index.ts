function userData(user: { firstName: string, lastName: string, age: number }) {
    const { firstName, lastName, age } = user; // destructering
    const person = {
        firstName,
        lastName,
        age
    }

    return person;
};

console.log(
    userData({ firstName: "Ali", lastName: "Abdal", age: 28 })
)







// Optional Property
function sum(x: number, y:number, j?: number): number {
    let z = 0;
    (j) ? z = x + y + j : z = x + y;
    return z;
}
console.log(sum(2, 5));
console.log(sum(2, 5, 10));
console.log(sum(2, 5, 13));
console.log(sum(2, 3));
