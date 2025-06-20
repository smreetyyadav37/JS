let score="11"   //string
let score1="11abc"  //string
let score2=null
let score3=undefined

console.log(typeof(score))  //string
console.log(typeof(score1))  //string
console.log(typeof(score2))
console.log(typeof(score3))


let valueNum=Number(score)  //type conversion from string to number
console.log(typeof valueNum)  //number
console.log(valueNum)   // 11

let valueNum1=Number(score1)  //type conversion from string to number
console.log(typeof valueNum1) //number
console.log(valueNum1) //NaN(not a number)

let valueNum2=Number(score2)  //type conversion from object to number
console.log(typeof valueNum2) //number
console.log(valueNum2) //0

let valueNum3=Number(score3)  //type conversion from undefined to number
console.log(typeof valueNum3) //number
console.log(valueNum3)  //NaN(not a number)