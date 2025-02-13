// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Selecting elements from the DOM (Document Object Model)
const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field where user enters their guess
const guessSlot = document.querySelector('.guesses'); // Displays previous guesses
const remaining = document.querySelector('.lastResult'); // Displays remaining attempts
const lowOrHi = document.querySelector('.lowOrHi'); // Displays hint if guess is too high or too low
const startOver = document.querySelector('.resultParas'); // Area where the "New Game" button will appear

const p = document.createElement('p'); // Create a new paragraph element for the new game button

// Initialize game variables
let prevGuess = []; // Stores previous guesses
let numGuess = 1; // Tracks the number of guesses
let playGame = true; // Boolean flag to check if the game is active

// Check if the game is active before adding an event listener
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault(); // Prevents the form from refreshing the page
        const guess = parseInt(userInput.value); // Convert user input to an integer
        console.log(guess); // Logs the guess in the console (for debugging)
        validateGuess(guess); // Call function to validate and process the guess
    })
}

/* Function to validate the user's guess */
function validateGuess(guess){
    if (isNaN(guess)){ // Check if input is not a number
        alert('Please enter a valid number.');
    }
    else if (guess < 1){ // Check if number is below valid range
        alert('Please enter a number greater than 1');
    }
    else if (guess > 100){ // Check if number is above valid range
        alert('Please enter a number less than 100');
    }
    else{ 
        prevGuess.push(guess); // Store the valid guess in an array

        if (numGuess === 11){ // Check if the user has reached the max number of guesses (10 attempts)
            displayGuess(guess); // Display the last guess
            displayMessage(`Game Over. Random number was ${randomNumber}`); // Show the correct number
            endGame(); // End the game
        }
        else{
            displayGuess(guess); // Display guess on screen
            checkGuess(guess); // Check if the guess is correct or not
        }
    }
}

/* Function to check the guess against the random number */
function checkGuess(guess){
    if (guess === randomNumber){ // If guess is correct
        displayMessage('You guessed it right!!');
        endGame(); // End the game
    }
    else if (guess < randomNumber) { // If guess is too low
        displayMessage(`Number is TOO low`);
    } 
    else if (guess > randomNumber) { // If guess is too high
        displayMessage(`Number is TOO high`);
    }
}

/* Function to display the guesses and remaining attempts */
function displayGuess(guess) {
    userInput.value = ''; // Clear input field
    guessSlot.innerHTML += `${guess}, `; // Append guess to previous guesses
    numGuess++; // Increase guess count
    remaining.innerHTML = `${11 - numGuess} `; // Update remaining guesses
}

/* Function to display messages (hints or results) */
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Insert message into the hint section
}

/* Function to handle the end of the game */
function endGame() {
    userInput.value = ''; // Clear input field
    userInput.setAttribute('disabled', ''); // Disable input field
    p.classList.add('button'); // Add a class for styling (if needed)
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`; // Create "New Game" button
    startOver.appendChild(p); // Add button to the DOM
    playGame = false; // Set game state to false (stops further guessing)
    newGame(); // Call function to restart game
}

/* Function to reset the game and start a new one */
function newGame() {
    const newGameButton = document.querySelector('#newGame'); // Select the "New Game" button
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1); // Generate new random number
        prevGuess = []; // Clear previous guesses
        numGuess = 1; // Reset guess counter
        guessSlot.innerHTML = ''; // Clear previous guesses display
        remaining.innerHTML = `${11 - numGuess} `; // Reset remaining attempts display
        userInput.removeAttribute('disabled'); // Enable input field
        startOver.removeChild(p); // Remove "New Game" button

        playGame = true; // Set game state to active again
    });
}
