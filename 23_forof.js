// -------------------------------
// for...of Loop in JavaScript
// -------------------------------

// The `for...of` loop is used to iterate over *iterable* objects like:
// - Arrays
// - Strings
// - Maps
// - Sets
// Objects are not directly iterable with `for...of`

// -----------------------------
// Example 1: for...of with an Array
// -----------------------------

let myArr = [1, 2, 3, 4, 5, 6, 7];

for (const num of myArr) {
    console.log(`The value inside the array is: ${num}`);
}

// Output:
// The value inside the array is: 1
// The value inside the array is: 2
// ...


// -----------------------------
// Example 2: for...of with a String
// -----------------------------

let myName = "Mutee Ur Rehman";

for (const char of myName) {
    console.log(`The character is: ${char}`);
}

// Output:
// The character is: M
// The character is: u
// ...


// -----------------------------
// Example 3: for...of with a Map
// -----------------------------

// A Map holds key-value pairs in insertion order and does not allow duplicate keys
const map = new Map();
map.set("Pak", "Pakistan");
map.set("Fr", "France");
map.set("UK", "United Kingdom");

// Iterating over a Map using for...of
for (const [key, value] of map) {       // basically map destructuring is done here 
    console.log(`${key} :- ${value}`);
}

// Output:
// Pak :- Pakistan
// Fr :- France
// UK :- United Kingdom


// -----------------------------
// Example 4: Why for...of doesn't work with plain objects
// -----------------------------

const myObject = {
    username: "Mutee Ur Rehman",
    isLoggedIn: true,
    email: "mutee@gmail.com"
};

// ❌ This will throw an error:
// for (const element of myObject) {
//     console.log(element);
// }

// ✅ Instead, use for...in or Object methods to iterate:

// Example: Using for...in (to get keys)
for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}

// Output:
// username : Mutee Ur Rehman
// isLoggedIn : true
// email : mutee@gmail.com
