
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
     return this
}



// if you dont use new word it will not create new instance and will override the values
// const userone = user('Mutee Ur Rehman' , true , 9)
// const usertwo = user('Hitesh Chaudhary' , true , 10)


const userone = new user('Mutee Ur Rehman' , true , 9)
const usertwo = new user('Hitesh Chaudhary' , true , 10)

console.log(userone)
