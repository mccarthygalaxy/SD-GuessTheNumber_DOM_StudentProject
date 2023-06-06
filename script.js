/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW

    //! Computer Secret vs User Guess
    //! Basic Logic w/ my variables/reponses

let guessN = userGuess;
let secretN = computersNumber;

if (guessN > secretN) {
    console.log(`Too High. Guess lower.`)
} else if (guessN < secretN) {
    console.log(`Too Low. Guess higher.`)
} else if (guessN == secretN) {
    console.log(`That is right! ${guessN} is the Secret Number!`);
}

    // YOUR CODE ABOVE
};



//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...


}

function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */

}

