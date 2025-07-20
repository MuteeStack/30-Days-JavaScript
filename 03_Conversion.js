// 📌 JavaScript Type Conversion and Basic Operations

// ---------------- Type Conversion: Number ----------------
let score = undefined;
console.log("Original type:", typeof score);

let converted = Number(score);
console.log("Converted type:", typeof converted); // number
console.log("Converted value:", converted);       // NaN

// Examples:
// "33"     => 33
// "33abc"  => NaN
// true     => 1
// false    => 0

// ---------------- Type Conversion: Boolean ----------------
let isLoggedIn = "";
console.log("Original type:", typeof isLoggedIn);

let isLoggedInBool = Boolean(isLoggedIn);
console.log("Converted type:", typeof isLoggedInBool); // boolean
console.log("Converted value:", isLoggedInBool);       // false

// Examples:
// 1        => true
// 0        => false
// ""       => false
// "Mutee"  => true

// ---------------- Type Conversion: String ----------------
let anyVariable = 33;
console.log("Original type:", typeof anyVariable);

let changedVariable = String(anyVariable);
console.log("Converted type:", typeof changedVariable); // string
console.log("Converted value:", changedVariable);       // "33"

// ------------------ Operations ------------------

// Negation and Power
let value = 3;
let negValue = -value;
console.log("Negative value:", negValue);        // -3
console.log("Power:", 2 ** negValue);            // 2^-3 = 0.125

// Arithmetic operations
console.log("Addition:", 2 + 2);                 // 4
console.log("Subtraction:", 2 - 2);              // 0
console.log("Multiplication:", 2 * 2);           // 4
console.log("Exponentiation:", 2 ** 3);          // 8
console.log("Division:", 2 / 3);                 // 0.666...
console.log("Remainder:", 2 % 3);                // 2

// String Concatenation
let str1 = "Mutee";
let str2 = " Ur Rehman";
let str3 = str1 + str2;
console.log("Full Name:", str3);                 // "Mutee Ur Rehman"

// Type Coercion in Expressions
console.log("Result 1:", "1" + 2);               // "12"
console.log("Result 2:", 1 + 2 + "2");           // "32"
console.log("Result 3:", "1" + 2 + 2);           // "122"

// Parenthesis and Operator Precedence
console.log("Expression Result:", (2 + 3) * 5 % 4); // 3

// Unary plus operator
console.log("+true =>", +true);                  // 1
console.log('+"Mutee" =>', +"Mutee");            // NaN
console.log('+"" =>', +"");                      // 0
