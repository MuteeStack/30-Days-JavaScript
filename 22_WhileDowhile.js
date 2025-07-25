// -----------------------------
// While Loop Example - Print Even Numbers
// -----------------------------

// Initialize index to 0
let index = 0

// Loop runs until index is less than or equal to 10
while (index <= 10) {
    console.log(`Number is ${index}`)  // Output the current value of index
    index += 2                         // Increment index by 2 (to print even numbers)
}



// -----------------------------
// While Loop Example - Iterate Through an Array
// -----------------------------

// Define an array with personal/professional information
let myArray = ["Mutee Ur Rehman", "Full Stack Developer", "UI/UX Designer"]

// Initialize array index
let arr = 0

// Loop through the array until the last index
while (arr < myArray.length) {
    console.log(`The value is ${myArray[arr]}`)  // Output current array element
    arr++                                        // Move to the next index
}



// -----------------------------
// Do-While Loop Example
// -----------------------------

// Initialize score to 10
let score = 10

// Do-While loop ensures the code inside runs **at least once**
do {
    console.log(`Score: ${score}`)  // Output the current score
    score++                         // Increment score
} while (score <= 10)              // Loop continues only if score is less than or equal to 10
