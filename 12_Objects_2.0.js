// ========================================
//     Object Manipulation & Utilities
// ========================================

// ---------- Singleton Object Creation ----------
let userData = new Object();

userData.name = "Mutee";
userData.age = 19;
userData.email = {
  gmail: "mutee@gmail.com",
  microsoftMail: "mutee@hotmail.com",
  othermail: {
    gmail: "goodyoureached",
    hmail: "goodyoureached"
  }
};

// Access nested property
console.log("HMail Address:", userData.email.othermail.hmail);

// ---------- Object Merging Examples ----------

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

// Method 1: Using Object.assign() (merges into a new empty object)
const obj5 = Object.assign({}, obj1, obj2, obj3);

// Method 2: Using Spread Operator (more modern & readable)
const obj4 = { ...obj1, ...obj2, ...obj3 };

console.log("Merged Object using Object.assign():", obj5);

// ---------- Object Utility Methods ----------

console.log("Object Keys:", Object.keys(userData));
console.log("Object Values:", Object.values(userData));
console.log("Object Entries (key-value pairs):", Object.entries(userData));
console.log("Has 'name' Property:", userData.hasOwnProperty("name"));

// ---------- Simulating Database Response ----------
const arrBig = [
  {
    id: "1",
    email: "Mutee@gmail.com"
  },
  {
    id: "2",
    email: "Mutee@hotmail.com"
  },
  {
    id: "3",
    email: "Mutee@yahoo.com"
  },
  {
    id: "4",
    email: "Mutee@outlook.com"
  }
];

// Access a specific email from the array of objects
console.log("Email of second user:", arrBig[1].email);
