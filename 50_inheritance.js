class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`${this.username} just loggedin`)
    }
}

class teacher extends user{   //teacher will have access to user and user will not have access to teacher
    constructor(username , email , password){
        super(username)    // behind the scenes user.call(this , username ) is used discussed in call.js
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`The course was added by ${this.username}`)
    }
}

const newMem = new teacher("Mutee" , "Mutee@stacks.com" , 12345)
newMem.addCourse()

const newUser =  new user("Rehman")
newUser.logme()  // this will have differnt instance

newMem.logme()  //this will have different instance


console.log(newMem instanceof user) // true
console.log(newUser instanceof teacher) // false because newUser is from user class 
console.log(teacher instanceof user) //fasle because these are both classes
