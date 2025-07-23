// ---------------- Object Destructuring ----------------

const anotherObj = {
  instructor: "Mutee Ur Rehman",
  courseName: "Front End Web",
  fees: 999
};

// Traditional way to access a property
console.log(anotherObj.instructor);

// Destructuring the object
const { instructor: ins } = anotherObj;
console.log(ins); // Output: Mutee Ur Rehman



// ---------------- React Props Destructuring ----------------

// In React, props are often destructured directly in the function parameter
const Navbar = ({ company }) => {
  // You can now use 'company' directly instead of writing props.company
  console.log(company);
};

// Example usage of the Navbar component (in actual React code)
Navbar({ company: "Mutee" });



// ---------------- JSON Overview ----------------

/**
 * JSON (JavaScript Object Notation) is a lightweight data format used
 * for storing and exchanging data, commonly between a client and a server.
 *
 * ✅ JSON replaced XML in most modern APIs due to its simplicity and compatibility with JavaScript.
 *
 * ✅ JSON data is often in the form of an object, but it can also be an array of objects.
 *
 * 🔗 To explore a live JSON API response, visit: https://randomuser.me/api/
 *
 * 📦 Example of a formatted JSON viewer: https://jsonformatter.org/
 *
 * These tools help you view and understand the structure of JSON responses.
 */


//-----Json Talk----------
// Json is the data which we recieve from api before that it was xml
// Json is usually objects but sometime it can be an array of object
// to view json file visit https://randomuser.me/
// direct open this https://randomuser.me/api/

// to convet it to good form or understandable form we use json formatter like https://jsonformatter.org/
