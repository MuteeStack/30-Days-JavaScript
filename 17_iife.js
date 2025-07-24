// IIFE means Immediately Invoked Function Expression
// We use it for two main purposes:
// 1. To immediately execute a function
// 2. To avoid polluting the global scope (variable pollution)

// Syntax: (function definition)(execution), arguments can also be passed during execution

// Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})(); // Always terminate IIFE with a semicolon to avoid conflicts with other statements

// Parameterized arrow function IIFE
((username) => {
    console.log(`DB CONNECTED ${username}`);
})("Mutee");

// Note: You cannot use let or const to declare a function inside an IIFE like this:
// (let printFunct = () => { console.log("DB CONNECTED THREE"); })(); // Invalid

// Correct arrow function IIFE
(() => {
    console.log("DB CONNECTED THREE");
})();
