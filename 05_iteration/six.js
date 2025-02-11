// Array of programming languages
// const coding = ["js", "ruby", "java", "python", "cpp"]

// Using forEach to iterate over an array and return values
// Note: forEach does not return a new array, it returns undefined
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

// Array of numbers
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using filter to create a new array with values greater than 4
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// Using forEach to create a new array with values greater than 4
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// Array of objects representing books
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Using filter to get books with genre 'History'
let userBooks = books.filter( (bk) => bk.genre === 'History')

// Using filter to get books with genre 'History' and publish year greater than or equal to 1995
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

// Logging the filtered books
console.log(userBooks);