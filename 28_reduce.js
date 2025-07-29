 

 let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

let initial_Value = 0
 let sum = arr.reduce(
    (accumulater , currentvalue) => accumulater + currentvalue , initial_Value
 )

 console.log(sum)


 //only for first one time the initial value will get into the accumulater then accumulater add the value with 
 //current value and then store value in the accumulater 
 // first time 0 + 1
 // second time 1 + 2
 // third time 3 + 3
 // fourth time 6 + 4 and so on .....

 let sum2 = arr.reduce(
    (acc , cuurval) => {
        console.log(`Accumulator:- ${acc}  and current Value:- ${cuurval}`)
        return acc + cuurval }, 0   // you can also give value like that ex 3 , 4 , 5
 )
 console.log(sum2)


 let shoppingcart = [
    {
        name: "Python Course",
        price: 999
    },
    {
        name: "javascript Course",
        price: 899
    },
    {
        name: "Mobile app development ",
        price: 8990
    }
 ]

 let totalBill = shoppingcart.reduce((acuu , currentvalue) => acuu + currentvalue.price , 0 )
 console.log(totalBill)


 
