// -----------------------------
// Basic Syntax of Switch Statement
// -----------------------------

// The switch statement is used to perform different actions based on different conditions.
// Important: It only checks for **strict equality (===)**. It cannot evaluate conditions like >, <, etc.

switch (key) {
    case value:
        // Code to execute when key === value
        break;

    default:
        // Code to execute if no case matches
        break;
}


// -----------------------------
// Example 1: Switch with Numbers
// -----------------------------

let month = 8  // Can be a number or string depending on usage

switch (month) {
    case 1:
        console.log("Month is January")
        break;
    case 2:
        console.log("Month is February")
        break;
    case 3:
        console.log("Month is March")
        break;
    case 4:
        console.log("Month is April")
        break;
    default:
        console.log("Month is not available")  // Runs if no case matches
        break;
}

//  Note:
// - `switch` checks for exact matches using `===`.
// - You **cannot** use conditions like `case > 5:` — for that, use `if...else`.


// -----------------------------
// Example 2: Switch with Strings
// -----------------------------

let userRole = "admin"

switch (userRole) {
    case "admin":
        console.log("Access granted: Admin Panel")
        break;
    case "editor":
        console.log("Access granted: Content Editor")
        break;
    case "viewer":
        console.log("Access granted: Read-Only Access")
        break;
    default:
        console.log("Invalid role")
        break;
}

// - Best Use Cases:
// - Role-based access
// - Mapping inputs to specific outputs
// - Replacing long chains of if-else when checking exact values

