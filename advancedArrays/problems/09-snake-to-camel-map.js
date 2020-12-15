/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/


// your code here
function snakeToCamel(snaked) {
    let words = snaked.split("_");
    let capitalized = words.map(curr => {
        return curr[0].toUpperCase() + curr.slice(1).toLowerCase();
    });
    // console.log(capitalized);
    let ans = "";
    capitalized.forEach(curr => {
        ans += curr;
    });
    return ans;
}

// snakeToCamel('snakes_go_hiss');


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
