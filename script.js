/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

// YOUR CODE BELOW

const usedGuesses = [];
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
        responseString = `That is right! ${guessN} is the Secret Number\nin [ ${usedGuesses.length} ] guesses!`;
        usedGuesses.push(guessN);
        console.log(usedGuesses);
        return responseString;
    }

    console.log(usedGuesses);

// return responseString;
    // YOUR CODE ABOVE
};


