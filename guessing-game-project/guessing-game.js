const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let min = 0;
let max = 0;
let secretNum = randomInRange(0, 100);
let numGuesses = 5;


function checkGuess(num) {
    if (num > secretNum) {
        console.log('Too high');
        return false;
    }
    if (num < secretNum) {
        console.log('Too low');
        return false;
    }
    else {
        console.log('Correct');
        return true;
    }
}

function handleGuess(answer) {
    num = Number(answer);
    // correct guess
    // close rl;
    if (checkGuess(num)) {
        rl.close();
    }
    //incorrect guess
    // call askGuess
    else {
        askGuess();
    }
}

function askGuess() {
    if (numGuesses-- > 0) rl.question("Enter a guess: ", handleGuess);
    else {
        console.log('You Lose');
        rl.close();
    }
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function askRange() {
    rl.question("Enter min: ", handleMin);
}

function handleMin(minimum) {
    min = Number(minimum);
    rl.question("Enter max: ", handleMax);
}

function handleMax(maximum) {
    max = Number(maximum);
    secretNum = randomInRange(min, max);
    console.log(`I'm thinking of a number between ${min} and ${max}...`);
    askGuess();
}
askRange();
// askGuess();