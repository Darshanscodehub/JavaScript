// Primitive(call by value)

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100
const constValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


// Reference (Non primitive)(Call by reference)
// Array, Objects, Functions
// Objects, Arrays, and Functions are not strictly "call by reference".
// They behave like "call by sharing" → the reference is passed, but reassigning the variable inside a function does NOT affect the original object.
const heros = ["Shaktiman", "naagraj"]
let myobj = {
    name :"Hitesh",
    age: 21,
}

const myFunction = function(){
    console.log("This is a function.")
}

console.log(typeof(heros));
console.log(typeof(myobj));
console.log(typeof(myFunction));


