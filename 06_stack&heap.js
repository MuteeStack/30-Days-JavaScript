//---------------------- Stack (Primitive Types) ----------------------//

let myname = "Mutee Ur Rehman"
let anotherName = myname // Copy of the value is assigned (not the reference)

anotherName = "Khalifa"  // Changing anotherName does NOT affect myname

console.log("Value in myname is:", myname)         // Output: Mutee Ur Rehman
console.log("Value in anotherName is:", anotherName) // Output: Khalifa

// Explanation:
// Primitive types (like strings, numbers, booleans) are stored in the stack.
// When assigned, a **copy** of the value is passed.



//---------------------- Heap (Non-Primitive Types) ----------------------//

let myObj1 = {
    email: "mutee@gmail.com",
    age: 12
}

let myObj2 = myObj1 // Reference is assigned (not a copy)

myObj2.email = "Khalifa@gmail.com"
myObj2.age = 20

console.log("myObj1:", myObj1)
// Output: { email: "Khalifa@gmail.com", age: 20 }

// Explanation:
// Non-primitive types (like objects, arrays, functions) are stored in the heap.
// When assigned, the **reference** is passed, not a copy.
// So changes to one object reflect in the other.
