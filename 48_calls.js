// In the beginning of react version 1 we use call and bind mostly but we dont need to use now but still used somewhere in this file you will learn where we will use call and what scenerio in which we will use call
// 


function setUserName(username){
    // complex DB calls
    this.username = username
    console.log("this is called")
}

function createUserName(username , email , password){
    setUserName.call(this , username) // we are outsourcing this.username = username you have given only refernce in general it didn't called so ehat happeded is that when it is runned it is removed from the call stack so the variable will also be removed so we have to hold the reference so what we do is that change it context by sending this to it in order to provide it a new context so it will save value in new context so in general we will provide it this function context (this ) so it will give us there properties like variable name
    this.email = email
    this.password = password
}



const chai = new createUserName("Mutee" , "Mutee@google.com" , 1234)

console.log(chai)



// Summary

// In early React versions (like React v1), we often used call() and bind(), 
// but nowadays they're rarely needed. However, they’re still useful in 
// certain scenarios. 

// Example: 
// Here, setUserName is a separate function that assigns a username. 
// If we call it directly, its 'this' won’t point to our new object, 
// so the username would get lost after execution. 
// To fix this, we use call() and pass 'this' from createUserName. 
// This way, setUserName runs in the context of the new object, 
// and the username property gets saved properly.
