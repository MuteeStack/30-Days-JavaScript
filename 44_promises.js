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
