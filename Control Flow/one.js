// if

// const isUserLoggedIn = true
// const temperature = 41
// if(temperature< 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("executed");

// < , > , <=, >=, ==,!=, === 

// const score = 200
// if (score>100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);




// const balance = 1000
// // if (balance>500) console.log("test"); // it is implishit scope 

// if (balance<500) {
//     console.log("less than");
// }
// else if(balance< 900){

// }
// else{
//     console.log("less than 1200")
// }




const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}