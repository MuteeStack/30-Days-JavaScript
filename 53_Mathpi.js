// Printing the value of Math.PI
console.log(Math.PI)

// Trying to overwrite Math.PI
// This will not work because Math.PI is read-only
Math.PI = 5            
console.log(Math.PI)

// Checking the property descriptor of Math.PI
// It shows that writable, enumerable, and configurable are all false
// which makes Math.PI immutable and hidden from normal enumeration
const dexcripter = Object.getOwnPropertyDescriptor(Math , 'PI')
console.log(dexcripter)

/*
Output:
{
  value: 3.141592653589793,
  writable: false,     // cannot change the value
  enumerable: false,   // won't appear in loops like for...in
  configurable: false  // cannot be redefined or deleted
}
*/

// ----------------------------
// Example with a custom object
// ----------------------------

const chai ={
    name: 'Masala Chai',
    price: 250,
    isAvailable: true,
    readyChai: function(){
        console.log(`Chai nai bani`)
    }
}

// Check the descriptor of the "name" property
console.log(Object.getOwnPropertyDescriptor(chai , 'name'))

// Redefining the "name" property
// - writable: false → cannot change its value
// - enumerable: false → won't show up in loops
Object.defineProperty(chai , 'name' , {
    writable: false,
    enumerable: false
})

// Check again after modification
console.log(Object.getOwnPropertyDescriptor(chai , 'name'))

// Looping through object entries
// "name" will not appear here because we set enumerable: false
for (const [key , value] of Object.entries(chai)) {
    // Ignore functions, only log data properties
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

