//----------------------Data Types in JavaScript----------------------//

// There are two types of datatypes:
// 1. Primitive (Call by Value)
// 2. Non-Primitive / Reference (Call by Reference)

//----------------------Primitive Data Types--------------------------//
// 7 types: String, Number, Boolean, BigInt, Symbol, Null, Undefined

let name = 'Mutee Ur Rehman';           // String
let age = 19;                           // Number
let bignumber = 1234567890234567823456n; // BigInt
let temprature = null;                 // Null
let grade;                             // Undefined
const isLoggedIn = true;              // Boolean
let id = Symbol('1234');              // Symbol
let anotherId = Symbol('1234');

console.log(id === anotherId);        // false, because Symbols are unique
console.log(typeof bignumber);        // bigint

// let number = BigInt(123);
// console.log(typeof number);        // bigint

//----------------------Non-Primitive Data Types----------------------//
// Arrays, Objects, Functions

let heros = ["Abu Ubaidah", "Imam Abu Hanifa", "Hassan Basri"];
console.log(typeof heros);            // object

let myobj = {
    name: "Mutee",
    age: 19,
    isLoggedIn: false
};
console.log(typeof myobj);            // object

const myfunc = function() {
    console.log("Assalamo Alaikum, How are you?");
};
myfunc();
console.log(typeof myfunc);           // function (technically a function object)
