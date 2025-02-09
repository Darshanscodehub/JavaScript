// Creating a Symbol
const mySym = Symbol("key1");
console.log(mySym); // Symbols are unique and used as object keys


const JsUser = {
    name: "Darshan",
    "full name": "Darshan Deshmukh", // Property with space (must be accessed using bracket notation)
    [mySym]: "mykey1",
    age: 16,
    location: "Daman",
    email: "darshan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(typeof(JsUser)); // object
// console.log(JsUser.email) //darshan@google.com
// console.log(JsUser["email"]) //darshan@google.com
//console.log(JsUser["full name"]) // Darshan Deshmukh
// console.log(JsUser[mySym]) //mykey1

JsUser.email = "darshan@chatgpt.com"
// console.log(JsUser["email"]) // darshan@chatgpt.com

// Object.freeze(JsUser)
/* Object.freeze(JsUser) is a JavaScript method used to make an object immutable. This means that once an object is frozen:

No new properties can be added to the object.
Existing properties cannot be removed.
Existing properties cannot be changed (values cannot be modified).
The prototype of the object cannot be changed.*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Output: Hello JS user
console.log(JsUser.greetingTwo()); // Output: Hello JS user, Darshan
