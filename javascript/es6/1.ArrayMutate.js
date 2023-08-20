//  Mutate the Array Declared with const

/*
    The const declaration has many use cases in modern JavaScript.

    Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

    However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

                                    const s = [5, 6, 7];
                                    s = [1, 2, 3];
                                    s[2] = 45;
                                    console.log(s);

    s = [1, 2, 3] will result in an error. After commenting out that line, the console.log will display the value [5, 6, 45].
*/

const mutateArr = [10, 9, 8];  // change it to [8, 10, 9]
console.log("Before: ", mutateArr);

function editArr() {

    mutateArr[0] = 8;
    mutateArr[1] = 10;
    mutateArr[2] = 9;

    return mutateArr;
};
console.log("After: ",editArr())
