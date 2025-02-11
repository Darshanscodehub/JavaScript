// Define an array of numbers
const myNums = [1, 2, 3]

// Calculate the sum of numbers in the array using the reduce method
// The reduce method applies a function to each element in the array and reduces it to a single value
// In this case, we're using an arrow function to add each number to the accumulator (acc)
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// Log the total sum to the console
console.log(myTotal);

// Define an array of objects representing items in a shopping cart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Calculate the total price of items in the shopping cart using the reduce method
// In this case, we're using an arrow function to add the price of each item to the accumulator (acc)
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// Log the total price to the console
console.log(priceToPay);