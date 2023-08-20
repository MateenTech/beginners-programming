/*
            Iterate with JavaScript While Loops
    You can run the same code multiple times by using a loop.

    The first type of loop we will learn is called a while loop because 
    it runs while a specified condition is true and stops once that condition is no longer true.
*/

const arrOfNums = [];
let i = 0;

while(i <= 10) {
    arrOfNums.unshift(i); // decending Order
    i++;
}
console.log(arrOfNums);



/*
                Iterate with JavaScript For Loops
    You can run the same code multiple times by using a loop.

    The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

    For loops are declared with three optional expressions separated by semicolons:

    for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
*/

let myArr = []
for(let j=0; j <= 5; j++) {
    myArr.push(j);
}
console.log(myArr);


/*
                    Iterate Odd Numbers With a For Loop
    For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

    We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
*/

const myArr2 = [];

for(let i = 0; i < 10; i += 2) {
    myArr2.push(i);
}
console.log(myArr2);

for(let j = 0;  j < 10; j += 3) {
    myArr2.push(j)
}
console.log(myArr2);





// Iterating an array with for loop
const names = ["Ali", "Ahmed", "Abdal", "Basit"];

for(let n = 0; n < names.length; n++) {
    console.log(names[n])
}



/*
                        Nesting For Loops
    If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
*/

const arr = [
    [2, 4], [3, 6], [4, 8]
];

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}




/*
    Iterate with JavaScript Do...While Loops
The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action. Here is a regular while loop that will run the code in the loop as long as i < 5:

                                const ourArray = []; 
                                let i = 5;

                                while (i < 5) {
                                ourArray.push(i);
                                i++;
                                }

    In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

                                const ourArray = []; 
                                let i = 5;

                                do {
                                ourArray.push(i);
                                i++;
                                } while (i < 5);

    In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.
*/

const myDoWhileArr = [];
let z = 10;

do {
    myDoWhileArr.push(z);
    z++;
} while(z < 10);
console.log(myDoWhileArr);

