const accountId = 144553
let accountEmail = "darshan@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2  Not Allowed because variable is constant.

accountEmail = "DD@dd.com"
accountPassword = "1234"
accountCity = "Daman"
console.log(accountId);

/*
prefer not to use var because of issue in block and functional scope.
*/

console.table([accountId, accountEmail,accountPassword, accountCity, accountState])


