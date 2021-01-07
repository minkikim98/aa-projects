/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

// your code here!

function wordsToSentence(words) {
    let ans = "";
    words.forEach((curr, index) => {
        if (index === words.length - 1) ans += curr;
        else ans = ans + curr + " ";
    });
    return ans;
}

let interrupter = interruptingWord => {
  return (sentence) => {
    let finalWords = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length - 1; i++) {
      finalWords.push(words[i]);
      finalWords.push(interruptingWord);
    }
    finalWords.push(words[words.length - 1]);
    return wordsToSentence(finalWords);
  };
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
