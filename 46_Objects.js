
// everything in javscript is an object it go above and above untill it get null
// all the properties available for the objects is available for the arrays , objects , function because javascript finds wverything due to prototypal propeties seeks above and above
// array ----------> object----------------> null
// object ----------> object----------------> null
// function ----------> object----------------> null

// even function is an object you can use .prototype or .power like methods to prove that 




function multipleby5(num){
    return num*5
}

multipleby5.power = 2


console.log(multipleby5(5))
console.log(multipleby5.power)

// bydefault prototype is set to the this.thatmethod so it give context of that method
console.log(multipleby5.prototype)


function createUser(username , score){
    this.username = username
    this.score = score
}


//we can also make our own property for a function like object like we can use function.slice so we can also make our own 
createUser.prototype.increment = function(){
    this.score++  // this means current context which means `jis naa bhi bolaya hai uss kaa kaam kar doo`
   
} // this function is now injected you have to call it inorder to use this



createUser.prototype.printMe = function(){
     console.log(`Score: ${this.score}`)
}



let u1 =  new createUser('Mutee' , 250)  // new will always create a new instance
let u2 =  new createUser("chai" , 25)

u2.printMe()  // you cannot run this code without new because there is no instance available
