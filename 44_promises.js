// Promises mean that the task which i have given will  be in queue but not completed (abhi keh abhi) suddenly
// which operations are these most prople thinks that these are networking operations but wrong for ex if we need to access file
// we cannot access it direcly we have to ask kernal and kernal generally give us the file and like cryptography of passwords and database operations
// so sometime we use assync await or sometime we use promises or future promisis

// there were libraries like Q and bluebird for promises and fetch in the past but now bluebird is by default


// lets create a promise nowadays people only know how to consume promisis but dont know how to make promisis
const promiseOne = new Promise(function(resolve , reject){
    // Do async taks
    // DB calls , cryptography , network calls
    setTimeout(()=>{
        console.log(`This is an async event`)
         resolve()  // you have to write this in order to connect resolve with then
    } , 1000)
     
})

// lets consume promise 
// //.then has connection with resolve it have a function which automatically recieve an argument ffrom the promiseOne
promiseOne.then(function(){
    console.log('Promise one consumed')
})




new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('Async task done')
        resolve()
    } , 1000)
}).then(function(){
    console.log('promise completed')
})



// what to do if we recieve data from the network how can i pass data then
const promiseThree = new Promise(function(resolve , reject){
    // for ex a function did alot of work and recieve data from the network so
    setTimeout(function(){
        // in most of cases it is object inside resolve
        resolve({username: "Mutee Ur Rehman" , email: "mutee@gamil.com"}) 
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user)
})


let promiseFour = new Promise(function(resolve , reject){

    setTimeout(function(){
        let error = false  // change it to see changes 
        if(!error){
          resolve({username: "Mutee Ur Rehman" , password:'123'})
        }
        else{
            reject("ERROR")
        }
         } , 1000)
})



// if we want a value from the object then we will return value from first then and use second then for that value this is also called chaining
// for clean code we write .then and .catch on new line
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{console.log(error)})
.finally(()=> console.log('This promise is either resolved or rejected'))   //you can say that .finally is default and will always run


// in databse operations people sometime use **ayns await** instead of .then as well to handle promisis there is no performance issue 


let promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error2 = false
        if(!error2){
            resolve({name: 'Javascript' , code: '.js'})
        }
        else{
            reject('Error! You got an error')
        }
    },1000)
})

// async usually wait for the work to be done it the work is done then it continues else it gives an error
