// In some scenarios for example a user ask password we will give him an encrypted password or will not give password
// so we have to use getter and setters

class user{
    constructor(email , password){
        this.email = email
        this.password = password
    }
    // get and set is defined as a method whenever we declare a variable
    // when we use get we also have to use set


        // ⚡ Important Details:
    // In the constructor, when we do `this.password = password`,
    // we are NOT directly assigning to `this.password`.
    // Instead, it automatically calls the setter method `set password(value)`.
    //
    // Inside the setter, we store the value in `this._password`.
    //
    // 👉 If we tried to do `this.password = value` inside the setter itself,
    // it would cause infinite recursion:
    // constructor → setter → setter → ... → Call Stack Exceeded.
    //
    // ✅ That's why we use a different internal property (commonly `_password`)
    // to safely hold the actual value.
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){  
        this._password = value  // this will give us error that like we are setting password in constructor and also in the setter so call stack will be exceeded
    }
}

const u1  = new user('Mutee' , 'ilovechaiaurcode')
console.log(u1.password)



