// ------------------- Scope in JavaScript (will discuss closure later when we have knowledge of javascript -------------------

/**
 * Global scope variable.
 * This can be accessed anywhere in this file.
 */
let d = 200;

/**
 * Function 'one' defines its own local variable 'a'.
 * Also contains a nested function 'two' demonstrating closure.
 */
function one() {
    let a = 10; // Function-scoped variable
    console.log("Inside one(), a:", a);       // Output: 10
    console.log("Inside one(), d:", d);       // Output: 200 (from global scope)

    function two() {
        // 'two' has access to 'a' due to closure
        console.log("Inside two(), a (closure):", a); // Output: 10
    }

    two(); // Calling nested function
}

// Call the function to see the logs
one();


// ------------------- Block Scope -------------------

/**
 * Demonstrating block-scoped variables using `const`.
 * Variables declared with `let` and `const` are not accessible outside their block.
 */
if (true) {
    const username = "Mutee";
    if (username === "Mutee") {
        const website = "youtube";
        console.log("Username + Website:", username + website); // Output: Mutee youtube
    }

    // console.log(website); // ❌ Error: website is block-scoped
}

// console.log(username); // ❌ Error: username is block-scoped


// ------------------- Hoisting -------------------

/**
 * Function Declaration is hoisted.
 * You can call it even before the declaration.
 */
user("Mutee"); // ✅ Works

function user(userName) {
    console.log(`Hello ${userName}, welcome back`);
}

/**
 * Function Expression is NOT hoisted .
 * Only the variable name is hoisted, not the function itself.
 */

// myFunct(true); // ❌ Error: Cannot access 'myFunct' before initialization

const myFunct = function(isLoggedIn) {
    if (isLoggedIn) {
        console.log("You have successfully logged in");
    }
};

myFunct(true); // ✅ Works after initialization


// ------------------- Summary -------------------

/**
 * Scope Types:
 * - Global Scope: Accessible anywhere
 * - Function Scope: Accessible only inside the function
 * - Block Scope: Accessible only inside the block { }
 */

