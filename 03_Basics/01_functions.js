function sayMyName(){
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    
}
// sayMyName() // Calling the function 


function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

// addTwoNumbers() // NaN
// addTwoNumbers(3, 4) // 7



function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); // Result: 8


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Darshan")) //Darshan just logged in


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // [500, 2000]
// console.log(calculateCartPrice(200, 400, 50, 20, 30, 20, 10)) 
//[50, 20, 30, 20, 10]




const user = {
    username: "Darshan",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)
//Username is Darshan and price is 199

handleObject({
    username: "sam",
    prices: 399
})
//Username is sam and price is 399


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200, 400, 500, 1000])); //400