/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

// your code here
function removeEWords(sentence) {
  let words = sentence.split(" ");
  let filtered = words.filter(curr => {
    if (curr.indexOf("e") === -1) return true;
    return false;
  });
  let ans = "";
  filtered.forEach((curr, index) => {
    if (index === filtered.length - 1) ans += curr;
    else ans = ans + curr + " ";
  })
  return ans;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
