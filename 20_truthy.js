

//truthy values: " " , [] , {} , function(){}
//falsy values: "" , false , 0 , -0 , null ,  undefined , Nan
// why needed because sometime we see in codes if(varname) so if variable is true then it will
//  execute this so in javscript there are some default values that are true and false 
// we can get confused with them so we seperated them into truthy and falsy values




if(true){
    console.log("The value is true")
} else{
    console.log("Value is false")
}



let truthyFalsyVar = []

if(truthyFalsyVar){
    console.log("Value in this truthy")
}
else{
    console.log("Value in this falsy")
}


// How to check if there is an empty array and object

let empArr = []
let empObj = {}

if(empArr.length === 0){
    console.log("Array is empty")
}

if(Object.keys(empObj).length === 0){
    console.log("Object is empty")
}


//null coalescing operator  ?? ignores null and undefined value and stores the first value 
// this is useful because when we are dealing with databases then 
//we will also recieve values like this name = null ?? "Mutee" this happens in order
//  to avoid the errors or crashing of the code

let val1

// val1 = 10 ?? 20
// val1 = null ?? 30
// val1 = undefined ?? 40
val1 = null ?? 78 ?? 88


console.log(val1)


// ternary operator bascially short hand of the if and else
// syntax  = condtion ? true : false

let temprature = 100

temprature>=100 ? console.log("temprature is greater then 100 ") : console.log("temprature is less then 100")
