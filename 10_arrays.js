// ------------------------ Array Basics -----------------------------

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myHeros = ["Umer bin Abdulaziz", "Hasan Basri", "Hazrat Usman Ghani"];

console.log(myArr[0]); // Access element

myArr.push(9); // Add element to the end
console.log(myArr);

myArr.pop(); // Remove element from the end
console.log(myArr);

myArr.unshift(10); // Add element to the start (not recommended)
console.log(myArr);

myArr.shift(); // Remove element from the start
console.log(myArr);

console.log(myArr.includes(5)); // Check if value exists
console.log(myArr.indexOf(7)); // Get index of a value

// ------------------------ Join -----------------------------

let narr = myArr.join("--"); // Join elements into string
console.log(narr);
console.log(typeof narr); // string

// ------------------------ Slice vs Splice -----------------------------

let newArr = [10, 20, 30, 40];

let aArr = newArr.slice(1, 3); // Does not change original
console.log(aArr);
console.log(newArr);

let nArr = newArr.splice(1, 3); // Changes original
console.log(nArr);
console.log(newArr);

// ------------------------ Spread Operator -----------------------------

let numArr = [0, 10, 20, 30, 40];
let namesArray = ["Ali", "Usman", "Gandapur"];
let anotherArray = ["Og", "Lion", "Op"];

// Spread operator preferred over concat
let merged = [...numArr, ...namesArray, ...anotherArray];
console.log(merged);

// ------------------------ Flat -----------------------------

let bigArray = [1, 2, 3, 4, 5, 6, 7, 8, 
    [9, 10, 11, 12, [67, 90, 98, [12, 13, 14]]], 
    14, 909, 
    [12, 765, 89]
];

let load = bigArray.flat(Infinity); // Flatten nested arrays
console.log(load);

// ------------------------ Array Methods -----------------------------

console.log(Array.isArray("Mutee")); // false
console.log(Array.from("Mutee")); // ['M','u','t','e','e']

// Special case: when input is object (interview question)
console.log(Array.from({ name: "Mutee" })); // [] (needs keys or values specified)

// ------------------------ Array.of -----------------------------

let n1 = 100;
let n2 = 200;
let n3 = 300;

console.log(Array.of(n1, n2, n3)); // [100, 200, 300]
