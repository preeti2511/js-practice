const accountID = 1//we can intialize a variable in this way also like account_id or account_Id const value can't be changed further
let accountEmail = "prabh@gmail.com"// way of declaring variable
var accountPassward = "123"// way of declaring variable
accountCity="Punjab"//way of declaring variable
//but best way of declaring variable is let 
// we are not using var because of issue in block scope and functional scope
let accountState

console.log(accountID)
console.table([accountID,accountEmail,accountPassward,accountCity,accountState])