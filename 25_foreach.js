let myArray = ["Mutee Ur Rehman" , "Full Stack Developer" , "UI/UX Designer" , "Teacher"]



// for each needs a function
myArray.forEach(function(item){
    // console.log(item)
})


// we can also give arrow function
myArray.forEach((items)=>{console.log(items)})


function outsidefn(myArray){
    console.log(myArray)
}
//if we declare a function outside we have to give the function reference

myArray.forEach(outsidefn)


// we can not only just return values of array we can also return index and also full array 

myArray.forEach((values , indexs , fullArray) => {
    console.log(values , indexs , fullArray)
})



// we also use foreach for the objects inside the array

let langArray = [
    {languageName : "Javascript",
        languageFile : "js"
    },
    {
       languageName : "Python",
        languageFile : "py" 
    },
     {
       languageName : "Java",
        languageFile : "java" 
    }

]

langArray.forEach((item) => {
    console.log(item.languageFile , ":-" , item.languageName)
})

