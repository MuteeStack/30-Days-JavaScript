let myArray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]


let someArray = myArray.map((valu) => valu+90)
console.log(someArray)

// we can also use multiple methods and this is called chaining
let totalVar = myArray
        .map((value) => value+10)
        .map((value) => value + 2)
        .filter((value) => value>15)
console.log(totalVar)



