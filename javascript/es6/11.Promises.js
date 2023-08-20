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