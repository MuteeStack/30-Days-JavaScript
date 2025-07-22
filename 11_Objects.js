// Singleton: An object created using a constructor function or class is a Singleton object (only one instance).

// ---------------- Object Literals ----------------

// Symbols can be used as unique keys in objects
const mySym = Symbol("key1");

// Creating an object using object literal syntax
let myObj = {
  name: "Mutee",
  "Full name": "Mutee Ur Rehman", // Property with a space must be accessed using bracket notation
  email: "mutee@gmail.com",
  age: 18,
  [mySym]: "mykey1", // Symbol key must be accessed using bracket notation, not string
};

// Accessing values from the object
// console.log(myObj.email);          // Dot notation
// console.log(myObj["name"]);        // Bracket notation (equivalent)
// console.log(myObj["Full name"]);   // Must use bracket notation because of space in key
// console.log(myObj[mySym]);         // Correct way to access symbol key

// Adding a new key-value pair to the object
myObj.location = "Ottoman Empire";

// Updating an existing value
myObj.age = 90;

// Freezing the object (uncomment to prevent further changes)
// Object.freeze(myObj);

// myObj.age = 22;  // This will silently fail if object is frozen
// console.log(myObj.age);  // Still 90 if frozen

// Adding a method to the object
myObj.greet = function () {
  console.log(`Hello ${this.name}, how are you?`);
};

// Calling the method
myObj.greet(); // Outputs: Hello Mutee, how are you?


console.log(myObj.greet()); // different output discuss later but happening due to return

console.log(myObj.greet);  // // Logging the function definition itself (not calling it)
