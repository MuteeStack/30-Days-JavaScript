class userData {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }

   static createId(){   //when we use static it dont give access to any instance
        return `123`
    }

}

let user1 = new userData('Mutee Ur Rehman')

// console.log(user1.createId())  


class teacher extends userData{
    constructor(username , email){
        super(username)
        this.email = email
    }
      printData(){
        console.log(`Username is ${this.username} , Email is ${this.email}`)
    }

}

const user2 = new teacher('mutee' , 'mutee@company.com')

// user2.printData()
// user2.logMe()
user2.createId()  //this will not work sice we are using static 

