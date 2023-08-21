//              Promises

/*
                        Create a JavaScript Promise
    
    A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

        const myPromise = new Promise((resolve, reject) => {

        });
*/

const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServe = true;

    if (responseFromServe) {
        resolve("We got the Data.");
    } else {
        reject("Data not received!");
    }

});

/*
    1. then method is executed immediately after your promise is fulfilled with resolve.
    2. catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. 
    
    Here’s the syntax:
*/

makeServerRequest
    .then(result => console.log(result)) // if the promise is succeedded return result (resolve)
    .catch(err => console.log(err)); // if the promise is failed return error (reject)

// result is the argument passed in to the resolve method.
// error is the argument passed in to the reject method.
let stocks = {
    fruits: ["strawberry", "banana", "blueberry"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

// const order = (callBack) => {
//     setTimeout(() => {
//         console.log(`1. ${stocks.fruits[0]}, was selected.`);

//         callBack();
//     }, 2000);
// };

// const production = () => {
//     setTimeout(() => {
//         console.log("2. production has started.");
//         setTimeout(() => {
//             console.log("3. the fruit has been chopped.");
//             setTimeout(() => {
//                 console.log(`4. ${stocks.liquid[0]} and ${stocks.liquid[1]} has been added.`)
//                 setTimeout(() => {
//                     console.log("5. the machine was started.");
//                     setTimeout(() => {
//                         console.log(`6. preparing ice cream in ${stocks.holder[0]}.`)
//                         setTimeout(() => {
//                             console.log(`7. ${stocks.toppings[0]} topping.`);
//                             setTimeout(() => {
//                                 console.log('\n8. Icream is served, enjoy it :).');
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000)
//     }, 0)
// };

// order(production);



async function placeOder() {
    try {
        await abca;
    } catch (error) {
        return error.message;
    }
};

placeOder().then((res) => console.log(res));