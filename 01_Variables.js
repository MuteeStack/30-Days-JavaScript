// 🔐 Variable Declarations in JavaScript

// Constant: Cannot be reassigned or redeclared
const accountId = 12;

// Let: Can be reassigned but not redeclared (block-scoped)
let accountEmail = "mutee@gmail.com";

// Var: Can be reassigned and redeclared (function-scoped — not recommended)
var accountPassword = "12345678";

// Implicit global variable (not preferred)
accountCity = "Islamabad";

// ❌ Invalid redeclaration using let in the same scope
// let accountEmail = "@gmail.com"; // Error: Identifier 'accountEmail' has already been declared

// ❌ Invalid reassignment of a const variable
// accountId = 14; // Error: Assignment to constant variable

// Updating values of mutable variables
accountEmail = "Rehman@gmail.com";
accountPassword = "Islamabad123";
accountCity = "Karachi";

// ❌ Redeclaring a var variable — works, but discouraged
// var accountPassword = "MMalam"; // Avoid using var for this reason

// Displaying data in a table format
console.table([accountId, accountEmail, accountPassword, accountCity]);
