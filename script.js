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
        outputGuesses = usedGuesses.join(" * ");

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
let playState = "";
let randNumberToGuess = 0;

/* below, `num` is a randomly generated number generated from main.js. It does not have to be used, you can use a number in your head for purposes of this.  `num/numberToGuess` is not stored anywhere, just logged.
*/

function startCompGuess(num) {
    randNumberToGuess = num;

    min2 = 1;
    max2 = 100;
    usedPCGuesses = [];
    playState = `playing`;

    return compGuess('startup'); //have computer make first guess
}

//? Section 2

function compGuess(reply) {
    if (playState === `won`) { // already won, user reset game
        return `You already won, click start to play again.`;

    } else if (reply === 'correct') { // PC won no need to go farther, just return
        playState = `won`;
        return `'${pcGuess2}' - I win in (${usedPCGuesses.length}) turns! \n Pitiful Human  :-)  ..........  [${usedPCGuesses}]`;

    } else if (reply === 'higher') { // PC guess was < number to guess, add 1 to min, goto bottom of function to return
        min2 = pcGuess2 + 1;

    } else if (reply === 'lower') { // PC guess was > number to guess, sub 1 to max, goto bottom of function to return
        max2 = pcGuess2 - 1;
    }

    // We are here because PC hasn't won or already won or PC's guess was wrong
    pcGuess2 = Math.floor((min2 + max2) / 2);

    //store the guess in the array of guesses
    usedPCGuesses.push(pcGuess2);
    // logging various goings on to see the number to guess, etc.
    console.log(`Number to guess: ${randNumberToGuess}`);
    console.log(`Computer guessed: ${pcGuess2}`);
    console.log(`Used Guesses: ${usedPCGuesses}`);
    console.log(`Number of Guesses: ${usedPCGuesses.length}`);

    // return PC guess
    return `Is it ${pcGuess2}?`;
}