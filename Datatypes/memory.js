// ***********************************************************
// there are mainly two type of memory use in java script 
// stack(use for primitive data type), Heap(use for non primitive data type)


// Stack Example
//The stack does not pass the original value, it only copies the value and the original value does not change. 
let  myName = "shubham";

let username = myName;
 username = "Manish"

console.log(myName);
console.log(username);


//Heap Meomory example
//Heap memory deduct passes original value

let fstuser = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let anotheruser = fstuser

anotheruser.email = "anotheruser@gmail.com"//changed because it is heap memory
console.log(fstuser);
console.log(anotheruser);
