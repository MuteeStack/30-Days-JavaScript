// In JavaScript, when we write a class, it’s actually just syntactic sugar over prototypes.

//  With class syntax, we get a cleaner, more readable way to define objects.
//  Behind the scenes, it still uses prototypes for memory efficiency and reusability.

// Here’s a small example showing both the class-based and prototype-based approaches.


class UserData{
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPass(){
        return `${this.password}abc`
    }
    printUser(){
        return `Username: ${this.username}`
    }
}

const User1 = new UserData('Mutee Ur Rehman' , 'mutee@gmail.com' , '1234')

console.log(User1.encryptPass())
console.log(User1.printUser())


// Behind the scenes

function Users(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}

Users.prototype.encryptPass = function(){
    return `${this.password}abcd`
}

Users.prototype.printUser = function(){
    return `Username: ${this.username}`
}

const user01 = new Users('Mutee' , 'google@gmail.com' , '12345')

console.log(user01.printUser())
console.log(user01.encryptPass())
