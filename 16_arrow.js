// --------------------Understanding `this` in Different Contexts--------------------

let myObj = {
    username: "Mutee",
    isLoggedIn: true,
    age: 19,
    email: "mutee@gmail.com",

    // In object method, `this` refers to the object itself
    greet: function () {
        console.log(`${this.username}, welcome back`);
        console.log(this); // Outputs the object itself
    }
};

// Example usage:
// myObj.greet();
// myObj.username = "Ur Rehman";
// myObj.greet();

console.log(this); 
// In Node.js (outside any function), `this` refers to an empty object: {}  
//  when we do this on browser this refers to the window 

// --------------------`this` in Regular Function--------------------

function warning(name) {
    console.log(this.name); 
    // In a regular function, `this` does not refer to the enclosing object/context
}
warning("MMalam");

// --------------------`this` in Arrow Function--------------------

const warn2 = (n1, n2) => {
    console.log(this.n1); 
    // Arrow functions do not have their own `this`
};
warn2(12, 13);

// --------------------Arrow Function Examples--------------------

// Traditional arrow function with return statement
const add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(12, 13));

// Shorthand arrow function with implicit return
const display = (myName) => myName;
console.log(display("Mutee"));

// Returning object from arrow function (wrap object in parentheses)
const arrObj = () => ({ username: "Mutee", age: 19 });
console.log(arrObj());

// --------------------To be Explored Later--------------------

// Example with forEach (arrow function inside an array method)
// const myArr = [12, 13, 14, 15];
// myArr.forEach((item) => console.log(item)); //This is an arrow function

