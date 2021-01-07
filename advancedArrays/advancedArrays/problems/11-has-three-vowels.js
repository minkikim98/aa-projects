/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/


// your code here
function isVowel(char) {
    let vowels = "aeiouAEIOU";
    if (vowels.indexOf(char) !== -1) return true;
    return false;
}

function hasThreeVowels(str) {
    let chars = str.split("");

    let numVowels = 0;
    let vowels = [];
    chars.forEach(curr => {
        if (isVowel(curr) && vowels.indexOf(curr) === -1) {
            // console.log(curr);
            vowels.push(curr);
            numVowels++;
        }
    });
    // console.log(numVowels);
    if (numVowels > 2) return true;
    return false;
}

// console.log(hasThreeVowels('bootcamp'));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
