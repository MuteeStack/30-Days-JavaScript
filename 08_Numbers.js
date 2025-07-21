let score = 100




let numbers = new Number(123456)
console.log(numbers)  // do this on browser to see methods of the Number


console.log(score.toString().length)

let number = 100.5689
console.log(number.toFixed(2))

console.log(number.toPrecision(4)) // if the value in toprecision is lower then the digits before decimal point then it will give value in exponential form


let amount = 1000000
console.log(amount.toLocaleString("en-IN")) // By default it is USA based

//--------------------------------Math----------------------------

// console.log(Math) // do this on browser console


// console.log(Math.round(5.55))
// console.log(Math.ceil(8.001))
// console.log(Math.floor(9.999999999999999))
// console.log(Math.max(23,34,56,78))
// console.log(Math.min(23,34,56,78))

//---------Random(Important Topic Must remember the formula)----------------
//----------Math.floor(Math.random() * (max - min + 1)) + min----------



// Range is from 0 to 9
console.log(Math.floor(Math.random() * 10))

// Range is from 1 to 9
console.log(Math.floor(Math.random() * 10) + 1)

// formula Math.floor(Math.random() * (max - min + 1)) + min it also include both min and max

let min = 50
let max = 60

console.log (Math.floor(Math.random() * (max - min + 1))+ min)

