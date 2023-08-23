//      Ignore Case While Match

/*
    Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

    You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag

    Syntax:
    const regextoMatch = /robort/i;
*/

let prog = "Hi JavaScript! this is Mateen Bhutto";
let caseMatchEg = /javascript|mateen/;
console.log(caseMatchEg.test(prog)); // false, because no lowercase regex matched

let ignoreCaseMatch = /javascript|mateen/i;
console.log(ignoreCaseMatch.test(prog)); // true, because flag (i) ignores the upper and lower case while matching