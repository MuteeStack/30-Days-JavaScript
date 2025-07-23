//------------------ Function: Greet with Console ------------------
function greet(name) {
    console.log(`Hello ${name}, welcome back`);
}

greet("Mutee");

//------------------ Function: Greet with Return -------------------
function greetWithReturn(name) {
    return `Hello ${name}, how are you?`;
}

console.log(greetWithReturn("Mutee"));

//------------------ Function: Sum of Two Numbers ------------------
function sumOfNumbers(n1, n2) {
    return n1 + n2;
}

console.log(sumOfNumbers(12, 3));

//------------------ Function: Login with Default Parameter --------
function login(username = "Mutee") {
    if (!username) {
        console.log("Please enter a username");
    } else {
        return `You have logged in: ${username}`;
    }
}

console.log(login("Abdullah"));
console.log(login()); // Uses default value "Mutee"

//------------------ (Rest Operator Example: Cart Price ) ------------------
function calCartPrice(n1 , n2 , n3 , ...n4){
    console.log(`n1: ${n1}  and n2: ${n2}  and n3: ${n3}  and n4 : ${n4}`)
    console.log(typeof n4)
}

calCartPrice(120,130,150 ,160,170,180)

//------------------ Function: Handle Objects ----------------------
function handleObjects(myObject) {
    if (!myObject) {
        return "No object passed!";
    }

    return `Hello ${myObject.uname}, age: ${myObject.age}, nationality: ${myObject.nation}`;
}

console.log(handleObjects({ uname: "Mutee", age: 29, nation: "Pakistani" }));
console.log(handleObjects()); // Handles undefined input gracefully

//------------------ Function: Handle Arrays -----------------------
function arrayHandle(myArr) {
    if (Array.isArray(myArr) && myArr.length > 1) {
        console.log("Second element in array:", myArr[1]);
    } else {
        console.log("Invalid or too short array");
    }
}

arrayHandle([1, 2, 3, 4]);

const arr1 = [10, 20, 30, 40];
arrayHandle(arr1);

