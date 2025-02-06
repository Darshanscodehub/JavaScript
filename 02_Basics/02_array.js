const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]); // flash


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); 
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); 
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Darshan")) //Checks whether the provided value is an array.

console.log(Array.from("Darshan")) //Converts an iterable object (like a string) into an array.
/*
 [
  'D', 'a', 'r',
  's', 'h', 'a',
  'n'
]
 */
console.log(Array.from({name: "Darshan"})) // interesting
/*
Purpose: Array.from() can be used on array-like objects (objects with a length property, like arguments or NodeLists).
{name: "Darshan"} is a plain object, which does not have a length property, so it cannot be converted directly into an array of properties or values.
However, Array.from() will attempt to create an array from the object's own enumerable properties that are indexed. In this case, it tries to iterate over the object but won't find valid indices, so it returns an empty array.
 */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
/*Array.of() is used to create a new array with the provided arguments as its elements, no matter what type of the arguments are. It doesn't check if the arguments are already array-like objects, it simply takes each argument and adds it as an element of the new array.*/