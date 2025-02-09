var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); //INNER: 10
    
}



// console.log(a); //300
// console.log(b); //Error
// console.log(c); //300


function one(){
    const username = "Darshan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    

     two()

}
one()


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)); // Output: 6

function addone(num) {
    return num + 1;
}
/** 
This works because function declarations are hoisted to the top of their scope.
JavaScript moves the entire function definition to the top before execution.
So, even though console.log(addone(5)) appears before the function declaration, it works correctly.
*/




// addTwo(5); 
// ❌ ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
/*
Here, addTwo is a function expression, which means it's assigned to a const variable.
Function expressions are not hoisted like function declarations.
Only the variable addTwo is hoisted, not the function definition.
Before reaching const addTwo = function(num) {...}, the variable addTwo is in the Temporal Dead Zone (TDZ) and cannot be accessed.
*/