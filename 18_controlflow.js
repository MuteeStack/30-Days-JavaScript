// -------------------------------
// Conditional Statements in JavaScript
// -------------------------------

// Comparison operators used:
// <  : less than
// >  : greater than
// <= : less than or equal to
// >= : greater than or equal to
// == : equal to (compares values only)
// ===: strict equal to (compares values and data types)
// != : not equal to (compares values only)
// !==: strictly not equal to (compares values and types)

// Logical operators used:
// && : Logical AND (all conditions must be true)
// || : Logical OR  (at least one condition must be true)


// Example 1: Temperature check using if-else
const temperature = 41;

if (temperature === 40) {
    // Condition is false, so this block won't execute
    console.log("Temperature is exactly 40");
} else {
    // This block executes because temperature is not 40
    console.log("Temperature is not exactly 40");
}

console.log("Program continues execution...");


// Example 2: Using if block with block scope (let/const)
const score = 200;

if (score > 100) {
    let power = "fly"; // 'let' is block-scoped, so 'power' is only accessible inside this block
    console.log(`User power: ${power}`);
}

// The following line would throw an error if uncommented
// console.log(`User power: ${power}`); // ❌ ReferenceError


// Example 3: Single-line if statement (not recommended for readability)
const balance = 1000;

// You can write multiple statements in a single line using commas
// But it's better to use curly braces for clarity
if (balance > 500) console.log("Test passed"), console.log("Test 2");


// Example 4: Multiple conditions using else-if
if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750");
} else if (balance < 900) {
    console.log("Balance is less than 900");
} else {
    console.log("Balance is less than 1200");
}


// Example 5: Logical AND (&&) - all conditions must be true
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard && 2 == 3) {
    // This block won't execute because 2 == 3 is false
    console.log("Allow to buy course");
}


// Example 6: Logical OR (||) - any one condition must be true
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    // This block executes because one condition is true (loggedInFromEmail)
    console.log("User logged in");
}

