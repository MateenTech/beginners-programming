// Switch statements works as strict equality operator 
// it checks value and data type both;

/*
    If you need to match one value against many options, you can use a switch statement. 
    A switch statement compares the value to the case statements which define various possible values. 
    Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.

    If no case matched run the default one
*/

const fruit = "orange";

switch (fruit) {
    case "apple":
        console.log("This fruit is apple!");
        break;
    case "orange":
        console.log("This fruit is orange!");
        break;
    default:
        console.log("No matches! Try again ...");
        break;
};



// In function
function caseInSwitch(val) {
    let answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "No Found!";
            break;
    }

    return answer;
};

const data = caseInSwitch(2);
console.log(data)



/*
                    Multiple Identical Options in Switch Statements

    If the break statement is omitted from a switch statement's case, the following case 
    statement(s) are executed until a break is encountered. If you have multiple inputs 
    with the same output, you can represent them in a switch statement like this:
*/

function multiCaseSwitch(val) {
    let answer = "";

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "Sorry! didn't found the provided value:(";
            break;
    }

    return answer;
}

console.log(multiCaseSwitch(5)) // Mid
console.log(multiCaseSwitch(8)) // High
console.log(multiCaseSwitch(3)) // Low