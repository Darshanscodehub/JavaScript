// Select all HTML elements with the class 'button' and store them in the 'buttons' variable
const buttons = document.querySelectorAll('.button')

// Select the HTML body element and store it in the 'body' variable
const body = document.querySelector('body')

// Use the forEach method to iterate over each button element
buttons.forEach(function (button) {
    // Log the current button element to the console for debugging purposes
    console.log(button);

    // Add an event listener to the button element to listen for a 'click' event
    button.addEventListener('click', function (e) {
        // Log the event object to the console for debugging purposes
        console.log(e);
        
        // Log the target element of the event (i.e., the button that was clicked) to the console for debugging purposes
        console.log(e.target);
        
        // Check the id of the button that was clicked and update the background color of the body accordingly
        // This can be improved by using a switch statement or an object to map button ids to colors
        if (e.target.id === 'grey') {
            // Set the background color of the body to the id of the button (i.e., 'grey')
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
})