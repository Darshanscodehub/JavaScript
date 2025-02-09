const user = {
    username: "Darshan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        // {
        //     username: 'Darshan',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
/* 
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

// console.log(this); // Output:- {}



function chai() {
    let username = "Darshan";
    console.log(this.username);
}

chai(); // Output: undefined

/* 
Why is this.username undefined?
this in a Regular Function (Non-Strict Mode)

In a regular function, this refers to the global object (window in browsers, global in Node.js).
However, username is declared using let inside the function. It is not added to the global object.
So, this.username is undefined.


If You Used var Instead of let:-
function chai() {
    var username = "Darshan";
    console.log(this.username);
}

chai(); // Still undefined (because `var` inside a function does not attach to `this`)
*/
const chai2 = function () {
    let username = "Darshan"
    console.log(this.username);
}
chai2() // undefined

/*
Function expressions (const chai2 = function() {}) have their own this, which defaults to the global object.
Global this has no username property, so this.username is undefined.
*/

const chai3 =  () => {
    console.log(this);
}
chai3() // {}



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4)) // 7



// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4)) // 7


// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4)) //7


// const addTwo = (num1, num2) => ({username: "Darshan"})
// console.log(addTwo(3, 4)) // Darshan
