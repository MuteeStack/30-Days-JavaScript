"use strict"; // Enables strict mode for writing modern JavaScript code

// Note: The following alert won't work in Node.js environment
// alert(3 + 3); 

// ---------------------- Data Types in JavaScript ---------------------- //
// Primitive Data Types:
// 1. Number      -> e.g., 1, 2.5
// 2. BigInt      -> for very large integers
// 3. String      -> e.g., "Hello", 'World'
// 4. Boolean     -> true or false
// 5. Symbol      -> used for unique identifiers
// 6. Null        -> Represents the intentional absence of any value. 
//                   For example, when receiving temperature data from a backend system, 
//                   if the temperature is not available, it may return null instead of 0 — 
//                   because 0 would indicate an actual temperature of zero degrees.

// 7. Undefined   -> variable declared but not assigned

// Non-Primitive Data Type:
// 8. Object      -> collection of key-value pairs

// ---------------------- Type Checking ---------------------- //
let age = 12;
let name = "Mutee";

console.log(typeof age);        // Output: number
console.log(typeof name);       // Output: string

console.log(typeof undefined);  // Output: undefined
console.log(typeof null);       // Output: object (this is a well-known JavaScript quirk)
