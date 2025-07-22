// 📌 Demonstration of Postfix and Prefix Increment Operators in JavaScript

// ------------------ Postfix ------------------
// In postfix (x++), the current value is used in the expression first,
// and then the variable is incremented.
let x = 3;
let y = x++; // y is assigned 3, then x is incremented to 4

console.log("Postfix:");
console.log("x:", x); // 4
console.log("y:", y); // 3

// ------------------ Prefix ------------------
// In prefix (++x), the variable is incremented first,
// and then the new value is used in the expression.
let x1 = 3;
let y1 = ++x1; // x1 is incremented to 4, then y1 is assigned 4

console.log("\nPrefix:");
console.log("x1:", x1); // 4
console.log("y1:", y1); // 4


//--------------Example----------------
let score = 100

console.log(score++) // output: 100
console.log(score) // output: 101
console.log(++score) // output: 102
