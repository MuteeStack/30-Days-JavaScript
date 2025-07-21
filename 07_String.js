let name = "Mutee Ur Rehman"
let repoCount = 8

// old and not recommended method
// console.log(name + repoCount + "Value")

// ✅ String interpolation (modern and clean)
console.log(`My name is ${name} and my repo count is ${repoCount}`)

let gameName = new String("Mutee Stacks")

console.log(gameName[0])                      // Shows the first letter of the string
console.log(typeof gameName)                  // Tells the type (object in this case)

console.log(gameName.length)                  // Gives total number of characters
console.log(gameName.toUpperCase())           // Converts all letters to uppercase
console.log(gameName.charAt(2))               // Shows the character at index 2
console.log(gameName.indexOf('t'))            // Finds the first position of 't'

console.log(gameName.substring(0, 4))         // Cuts the string from index 0 to 3 (cannot use negative)
console.log(gameName.slice(0, 4))             // Also cuts the string but allows negative indexes

let username = "            Mutee Ur Rehman           "
console.log(username.trim())                  // Removes extra spaces from start and end

let url = "https://www.mutee.com/%20/good/%20/Meal"
console.log(url.replaceAll("%20", "-"))       // Replaces all "%20" with "-"

let user = "Mutee+Ur+Rehman"
console.log(user.split("+"))                  // Breaks the string into array wherever "+" is found

//------------------------------------------------------------ Method Discussed 09----------------------------------------------------
// String Interpolation (${} inside `backticks`) – Adds variables inside a string easily.

// toUpperCase() – Makes all letters capital.

// length – Tells how many characters are in the string. 

// charAt(1) – Gets one letter from the string at a specific position.

// indexOf("M") – Finds the position of a letter or word in the string.

// substring(0, 4) – Cuts out part of the string (no negative numbers allowed).

// slice(-8, 4) – Also cuts out part of the string (can use negative numbers).

// trim() – Removes spaces from the beginning and end of a string.

// replaceAll("%20" , "-") – Replaces all matching words or letters in the string.  replace() - Only replace the first value

// split("+") – Breaks the string into pieces and puts them in an array.


