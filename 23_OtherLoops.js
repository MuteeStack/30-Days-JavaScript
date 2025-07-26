

let myArr = [1,2,3,4,5,6,7]

for (const num of myArr){
    // console.log(`The value inside the array is: ${num}`)
}

let myName = "Mutee Ur Rehman"

for (const element of myName) {
    // console.log(`The character is ${element}`)
}


//map (just like object holds key value pair but in an order and there is no duplicate values)

const map = new Map()
map.set("Pak" , "Pakistan")
map.set("Fr" , "france")
map.set("uk" , "united kingdom")


// console.log(map)


for(const [keys , values] of map){  // map destructuring is done here
    console.log(keys , ":-" , values)
}



// we cannot iterate an object using for loop but there are other methods to iterate this
// const myObject = {
//     username : "Mutee Ur Rehman",
//     isLoggedIn : true,
//     email : "mutee@gmail.com"
// }

// for (const element of myObject) {
//     console.log(element)
// }
