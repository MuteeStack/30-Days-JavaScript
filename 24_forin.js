// so for objects we use for in loop
const myObject = {
    js : "javascript",
    py : "python",
    rb : "ruby",
    tsx : "typescript",
    jsx : "react"
}

for (const keys in myObject){
    console.log(`${keys} stands for ${myObject[keys]}`)
}



let myHeros = ["Hazrat Usman Ghani" , "Hazrat Umer R.A" , "Hazrat Ali R.A"]

for(const key in myHeros){
    console.log(key)    // output will be index so basically array also have keys which are there index
                        // so that's why it is an object type 
}

// We cannot apply forin on maps
const map = new Map()
map.set("Pak" , "Pakistan")
map.set("Fr" , "france")
map.set("uk" , "united kingdom")

for(const key in map){
    console.log(map[key])
}
