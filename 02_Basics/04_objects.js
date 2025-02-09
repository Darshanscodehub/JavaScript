// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Darshan",
            lastname: "Deshmukh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // Darshan

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } 
// console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
]

// console.log(users[1].email) //b@gmail.com


// console.log(tinderUser);
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


// console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ]


// console.log(Object.values(tinderUser)); 
//[ '123abc', 'Sammy', false ]


// console.log(Object.entries(tinderUser)); 
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]





// Defining an object with course details
const course = {
    coursename: "javaScript",
    price: "999",
    courseInstructor: "Darshan"
};

// Accessing properties normally
// console.log(course.courseInstructor); // Output: Darshan

// Object Destructuring
const { courseInstructor: instructor } = course;
/* 
   Destructuring extracts `courseInstructor` from `course` and assigns it to a new variable `instructor`.
   This allows accessing `courseInstructor` with the variable `instructor` instead.
*/

console.log(instructor); // Output: Darshan
