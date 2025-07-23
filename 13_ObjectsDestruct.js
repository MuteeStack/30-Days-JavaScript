//-------------Object Destructuring-------------

let anotherObj = {
          instructor : "Mutee Ur Rehman",
          courseName : "Front End Web ",
          fees : 999
}

console.log(anotherObj.instructor)

const {instructor: ins} = anotherObj
console.log(ins)



//-----------------In react how we destructure---------
let navbar = ({company}) =>{
          // we use {varname} instead of writing props.
      }

navbar(company = "Mutee")


//-----Json Talk----------
// Json is the data which we recieve from api before that it was xml
// Json is usually objects but sometime it can be an array of object
// to view json file visit https://randomuser.me/
// direct open this https://randomuser.me/api/

// to convet it to good form or understandable form we use json formatter like https://jsonformatter.org/
