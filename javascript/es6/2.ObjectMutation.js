// Prevent Object Mutation

/*
    As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

    Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.

                        let obj = {
                        name:"FreeCodeCamp",
                        review:"Awesome"
                        };
                        Object.freeze(obj);
                        obj.review = "bad";
                        obj.newProp = "Test";
                        console.log(obj); 
*/

const user = {
    name: "John",
    prof: "Developer",
};
Object.freeze(user);
user.name = "Kenway";
user.prof = "Gamer";

console.log(user);