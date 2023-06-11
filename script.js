/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

// YOUR CODE BELOW
//! Game Part 1

let usedGuesses = [];
let min = 1;
let max = 100;

function randomNumber(userGuess, computersNumber) {

    let guessN = userGuess;
    let secretN = computersNumber;
    let responseString = "";
    console.log(secretN);

    if (guessN > max || guessN < min) {
        console.log(`${guessN} is outside set limits`);
        responseString = `Warning, ${guessN} is outside the bounds.`;
        usedGuesses.push(guessN);
        console.log(usedGuesses);
        return responseString;
    } else if (usedGuesses.includes(guessN)) {
        console.log(`${guessN} is a REPEAT GUESS.`);
        responseString = `Warning, ${guessN} is a guess you've already made.`;
        usedGuesses.push(guessN);
        console.log(usedGuesses);
        return responseString;
    } else if (guessN > secretN) {
        console.log(`go lower than ${guessN}`)
        responseString = "Too High. Guess lower.";
        usedGuesses.push(guessN);
        console.log(usedGuesses);
        return responseString;
    } else if (guessN < secretN) {
        console.log(`go higher than ${guessN}`)
        responseString = "Too Low. Guess higher.";
        usedGuesses.push(guessN);
        console.log(usedGuesses);
        return responseString;
    } else if (guessN == secretN) {
        console.log(`correct number = ${guessN}`);
        usedGuesses.push(guessN);
        console.log(usedGuesses);
        outputGuesses = usedGuesses.join(" - ");

        responseString = `That is right! ${guessN} is the Secret Number\nin [ ${usedGuesses.length} ] guesses: - [ ${outputGuesses} ]`;
        return responseString;
    }

    console.log(usedGuesses);

    // return responseString;
    // YOUR CODE ABOVE
};

//! Game Part 2

//? Section 1

let pcGuess2 = null;
let usedPCGuesses = [];
let min2 = 1;
let max2 = 100;

function startCompGuess(num) {
    let startNum = Math.floor((min2 + max2) / 2);
    // let startNum = Math.floor((Math.random() * 100) + 1);
    console.log(startNum);
    usedPCGuesses.push(startNum);
    console.log(usedPCGuesses);
    return startNum;
}

//? Section 2

// pcGuess2 = startNum;
function compGuess(reply) {
    pcGuess2 = Math.floor((min2 + max2) / 2);

    if (reply === 'lower') {
        max2 = pcGuess2 - 1;
        return `${pcGuess2}`;
    } else if (reply === 'higher') {
        min2 = pcGuess2 + 1;
        return `${pcGuess2}`;
    } else if (reply === 'correct') {
        pcGuess2 = Math.floor((min2 + max2) / 2);
        return `"${pcGuess2}" -- I WIN.`;
    }    
}