/*******************************************************************************
Write a function `sentenceMapper` that accepts a sentence and a callback as arguments.
The function should return a new sentence where every word of the original sentence
becomes the result of passing the word to the callback.

Examples:

let result1 = sentenceMapper("what is the answer?", function(word) {
    return word.toUpperCase() + "!";
});
console.log(result1); // 'WHAT! IS! THE! ANSWER?!'

let removeVowels = function(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!"aeiou".includes(char)) {
            newWord += char;
        }
    }
    return newWord;
};

let result2 = sentenceMapper("this is pretty cool right", removeVowels);
console.log(result2); // 'ths s prtty cl rght'
*******************************************************************************/

function wordsToSentence(words) {
    let ans = "";
    words.forEach((curr, index) => {
        if (index === words.length - 1) ans += curr;
        else ans = ans + curr + " ";
    });
    return ans;
}

let sentenceMapper = (sentence, cb) => {
    let words = sentence.split(" ");
    let finalWords = [];
    words.forEach(curr => {
        finalWords.push(cb(curr));
    });
    return wordsToSentence(finalWords);

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = sentenceMapper;
