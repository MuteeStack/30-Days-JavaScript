let myArray = [1 , 2, 3,4,5,6,7,8,9,10]

let varArray = myArray.forEach((item)=>{
    return item
})


//foreach doesnt return a value so that we cannot apply other things after getting the value
console.log(varArray)



//filter returns a value but we have to give a condition in it so that when for something in an array a condition is true it then return that value
// const varNum = myArray.filter((num) => num > 4) 
// console.log(varNum)


const varNum2 = myArray.filter((nums) => {
        return nums > 6 // you must use return here because there is scope if you don't use {} and this is one line then no need to write return 
})
console.log(varNum2)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
  ];


  let userbooks = books.filter( (indexes) => {
        return indexes.genre === "History"
  })

  console.log(userbooks)



  // you can also give two or more then two conditions
  userbooks = books.filter((value) => (value.publish >=1999 && value.genre === "Science"))
  console.log(userbooks)
