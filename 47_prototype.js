// i want to create a property(method) named as trueLength in order to check the length wothout spaces 
// in order to create this we have to use myName.prototype.trueLength = function(){} but what if we do directly Object.prototype.trueLength = function(){} then we will still be able to use this because


//path where each have to go while executing javascript code everything is an objecct
// array ----------> object----------------> null      |
// object ----------> object----------------> null     | already discussed
// function ----------> object----------------> null   |

// -------------------------------Scene 1-----------------------
// in this we injected a function (Object.prototype.feeling = function() {}) into object and can use with objects and arrays and all others 

// ------------------------------Scene 2-----------------------
// in this we injected a function into Array using Array.prototype.greetings then it will be only accessable to array because it is for array not in the path where they have to go




// let myName = ["Chai"]
// console.log(myName.trueLength)

let myObj = {
    username : "Mutee",
    score: '250',
    greeting: function(){
        console.log(`Welcome ${this.username}`)
    }
}

Object.prototype.feeling = function(){
    console.log(`I am feeling good`)
}

Array.prototype.greetings = function() {
    console.log("Welcome Back @GentleMen")
}

let myName = ["Mutee"]
// myObj.greetings()
myName.greetings()


// Inheritance

let user = {
    name: "chai",
    email: "chai@google.som"
}


let teacher = {
    isTeaching: true
}

let taAssistant = {
    isAvailable: false
}

let TeachingSupport = {
    hired: false
}

let TAsupport = {
    assignment: "JS ASSIGNMENT",
    fullTime: true,
    __proto__: TeachingSupport   // this is prototypal inheritance and this method is outdated we have now modern syntax
}

teacher.__proto__ = user // this is prototypal inheritance and this method is outdated we have now modern syntax


// This Modern Sytax is now being used 
Object.setPrototypeOf(TAsupport , teacher)  //TAsupport will have access to properties of teacher




//Problem solution given at the start

let givenName = 'Mutee            '


String.prototype.trueString = function(){
    console.log(this)
    console.log(`True length is ${this.trim().length}`)  //this = 'jis naa boolaya hooo uss '
}

givenName.trueString()
"hitesh    ".trueString()
