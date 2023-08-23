console.log("\t---------- Conver String into Array ----------\n")


let str = "Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts."
console.log("String: ", str);

const strArr = [];
let word = ''

function makeStrIntoArray() {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word += str[i]
        }
        else {
            strArr[strArr.length] = word;
            word = ""
        }
    }
}
makeStrIntoArray();
