/* 
GitHub Codespaces run on cloud servers, which may be located in different time zones around the world. As a result, JavaScript's new Date() may return a time that differs from your local system time. This can affect functions like getDay(), getHours(), and getDate().
*/


let myDate = new Date()
// console.log(myDate); //2025-02-06T20:13:10.326Z

// console.log(myDate.toString()); //Thu Feb 06 2025 20:13:41 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); //Thu Feb 06 2025

// console.log(myDate.toLocaleDateString()); //2/6/2025

// console.log(myDate.toLocaleString()); //2/6/2025, 8:15:13 PM

// let myCreatedDate = new Date(2025, 0, 23)
// console.log(myCreatedDate.toLocaleString()); 
//1/23/2025, 12:00:00 AM

// let myCreatedDate = new Date(2025, 10, 23)
// console.log(myCreatedDate.toLocaleString()); 
//11/23/2025, 12:00:00 AM

// let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); 
//1/23/2025, 5:03:00 AM

let myCreatedDate = new Date("2025-05-18")
// console.log(myCreatedDate.toLocaleString()); 
// 5/18/2025, 12:00:00 AM


let timeStamp = Date.now()
// console.log(timeStamp); 

// Date.now() returns the current timestamp (milliseconds since January 1, 1970, UTC).

// console.log(myCreatedDate.getTime()); 

/* new Date("2025-05-18") creates a fixed date object (May 18, 2025, at 00:00:00 UTC).
.getTime() returns the timestamp for this specific date.
This value does not change—it is always 1747526400000 (for this date).
*/

let newDate = new Date()
// console.log(newDate); // give date
// console.log(newDate.getMonth() + 1); // give months number, follows 0 index
// console.log(newDate.getDay()); // give weekdays number, follows 0 index with sunday as 0.


console.log(newDate.toLocaleString('default', {
    weekday: "long",
})
)
// 'default' means it will use the system's locale (language and region settings).
// { weekday: "long" } ensures the output is the full weekday name.
