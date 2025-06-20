const accountId=111
let accountEmail="smreetyyadav@gmail.com"
var accountPassword="111" //we do not use var for declaring variables, because of issue in block and functional scope
accountCity="Jaipur" //not a good way to declare variables
var accountState;

//accountId=222 //not allowed, const is fixed, cannot be changed
accountEmail="s@gmail.com"
accountPassword="222"
accountCity="Bengaluru"

console.log(accountEmail)
console.log(accountId)
console.log(accountPassword)
console.log(accountCity)

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])