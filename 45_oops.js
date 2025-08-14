const myData = {
    // this is object literal
    name: "Mutee Ur Rehman",
    isLoggedIn: 'true',

    userdata: function(){
        console.log(`Name: ${this.name}`)  // we have to sue this because this refers to current context otherwise it will not know the context and will give error
    }
}

// console.log(myData.userdata())
// console.log(this)

function user(username , isLoggedIn , logInCount){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.logInCount = logInCount;
    this.greetings = function(){
        console.log(`Hello ${this.username}`)
    }


        return this        //   this thing is already part of it but good practice is to write it
}



// if you dont use new word it will not create new instance and will override the values
// const userone = user('Mutee Ur Rehman' , true , 9)
// const usertwo = user('Hitesh Chaudhary' , true , 10)


// Step 1: whenever we use new keyword an empty object is created which we say that it is an instance
// Step 2: constructor function is called due to new keyword what does this do is that it take all the arguments in it and give it to you
// step 3: we write this word so these are then injected inside the this variable name
// step 4: they are given in functions

const userone = new user('Mutee Ur Rehman' , true , 9)
const usertwo = new user('Hitesh Chaudhary' , true , 10)

console.log(userone)
console.log(usertwo.constructor)  //constructor property generally give us reference of itself 
// console.log(userone.greetings())

// selfstudy of instanceOf tells us that is this object instance of anyother object
