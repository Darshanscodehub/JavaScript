// Function to generate a random hex color
const randomColor = function () {
    const hex = '0123456789ABCDEF'; // String containing all possible hex digits
    let color = '#'; // Hex color starts with '#'

    for (let i = 0; i < 6; i++) { // Loop runs 6 times to generate a 6-character hex code
      color += hex[Math.floor(Math.random() * 16)]; // Picks a random hex digit and adds it to 'color'
    }

    return color; // Returns the final hex color code
};

// Variable to store the interval ID (used to stop color change)
let intervalId;

// Function to start changing the background color
const startChangingColor = function () {
    if (!intervalId) { // Ensures the function doesn't start multiple intervals
      intervalId = setInterval(changeBgColor, 1000); // Calls changeBgColor every 1000ms (1 second)
    }

    // Function to change the background color
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor(); // Sets the background color to a random color
    }
};

// Function to stop changing the background color
const stopChangingColor = function () {
    clearInterval(intervalId); // Clears the interval, stopping the color change
    intervalId = null; // Resets intervalId to prevent multiple intervals from starting
};

// Event listener for the "Start" button - starts changing color when clicked
document.querySelector('#start').addEventListener('click', startChangingColor);

// Event listener for the "Stop" button - stops changing color when clicked
document.querySelector('#stop').addEventListener('click', stopChangingColor);
