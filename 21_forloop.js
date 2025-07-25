
// Basic Loop syntax

// for(let index = 0 ; index < 10 ; index++){
//     console.log(index)
// }




// Loop with if and else

// for(let index = 0 ; index <= 10 ; index++){
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best element")
//     }
//     console.log(element)
// }


// nested for loop (Printing table done :) emoji laughting )

for(let i = 3 ; i <=3 ; i++){
    console.log(`This is table of ${i} (outer loop):`)
    for(let j=1;j<=10;j++){
            console.log(`${i} x ${j} = ${i * j}`)
    }
}


// loop for array

let myArray = ["Mutee Ur Rehman" , "Full Stack Developer" , "UI/UX Developer" , "Front End Developer"]

for(let index=0 ; index<myArray.length ; index++){
        console.log(`The value inside array is ${myArray[index]}`)
}
// there are many cases where i have to start the loop but i dont want it to get fully end for ex
// there is a data of book from database i want to print first 5 books on one page and another 5 
// on the next page so i will use these keywords like break and continue to deal with such situations


for(let i = 0 ; i<=10 ; i++){
    if(i==5){
        console.log(`5 Detected stop the loop`)
        break   // here the break will end the loop 
    }
    console.log(`The number is ${i}`)
}

for(let i = 0 ; i<=10 ; i++){
    if(i==5){
        console.log(`5 Detected in the loop`)
        continue   // here the continue will skip 1 iteration in the loop 
    }
    console.log(`The number is ${i}`)
}

