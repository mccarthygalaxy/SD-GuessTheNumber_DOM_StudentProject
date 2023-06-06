# Guess The Number

## Random Number 1 to 100

## User Guesses Computer Number:

    * Number Generated
    * Loop - keeps game moving while guess is incorrect
        a. While?
        b. For?
    * IF - Conditional
        a. input guess
        b. if guess > target say "too high"
        c. if guess < target say "too low"
        d. if guess == target say "win"

## Stretch Goal I

    * Track and count the number of guesses it takes
    * Use `counterN` variable starting at 0 to track and log at end of game 


## Computer Guesses Your Number:
~~### Each Guess will produce a new array of numbers. Each array will divide the previous array. Each array smaller than previous. Should divide and eliminate numbers out of bounds. Use.splice?~~

    *NOTE - using Binary Search, simple math of averages will keep track of halving the search values!

~~Math.Random()~~  

    - Loop - keeps game moving while guess is incorrect
    - Math.floor() for targeted guessing and/or:
    - Math.`something` to target guessing based on halves?
    - Math.random() guessing probably takes longer than targeted.

    **! see [Binary Search] (https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/a-guessing-game){:target="_blank"}


# Basic Ideas

    let min = 1
    let max = 100
    let guess = null

    assign *GUESS* = the average of min and max rounded down to the nearest integer.

    let guess = (min + max) / 2

    if guess is too low, now set min to 1 plus guess.
    if guess is too high, now set max to 1 minus guess.
    goto *GUESS*

## Stretch Goal II

    * Create secondary IF conditional to see if subsequent guesses are outside of the new range (`cheating`)
    * Possibly create a separate *FUNCTION* to call that checks if guesses are consistent to range
