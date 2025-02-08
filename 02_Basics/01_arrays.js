const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj", "Superman"]

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(myHeors); // [ 'shaktiman', 'naagraj' ]

// console.log(myHeors[0]); // shaktiman
// console.log(myHeors[1]); // naagraj

// Array methods

myArr.push(6) // add element at the end of arr
myArr.push(7) 
myArr.pop() // remove last element from the arr

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9) //Inserts one or more elements at the start of the array. Returns new length of the array
myArr.shift() //Removes and returns the first element of the array


// console.log(myArr.includes(9)); 
//includes() is used to check if a specific value exists in an array.

// console.log(myArr.indexOf(3)); 
//indexOf() returns the index of the first occurrence of a value in an array.

const newArr = myArr.join()
// console.log(newArr); //0,1,2,3,4,5,6

// join() combines all elements of an array into a single string, separated by commas (or a custom separator).
// by default the separator is comma(,).

const newArr2 = myArr.join(" ") // Using space as a separator
// console.log(newArr2); //0 1 2 3 4 5 6




// slice, splice

const myn1 = myArr.slice(1, 3)
// console.log(myn1); // [1,2]

/*
slice() extracts a section of an array into a new array.
The start index is inclusive, while the end index is exclusive (not included).
The original array is not modified.
You can use negative indices to count from the end of the array.
 */


const myn2 = myArr.splice(1, 3,)
// console.log(myArr); // [0,4,5,6]
// console.log(myn2); // [ 1, 2, 3 ]

/*
array.splice(start, deleteCount, item1, item2, ...)
start (Required): The index at which to start changing the array.
deleteCount (Optional): The number of elements to remove. If not specified, all elements from the start index to the end of the array will be removed.
item1, item2, ... (Optional): Elements to add to the array, starting at the start index.
 */