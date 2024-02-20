const user = {
    username : "Shubham",
    prise: 9999,

    WelcomeMessage: function(){
        // this  keyword are using  for focusing current contex 
        console.log(`${this.username} , Welcome to my CODEHUB`);
        // console.log(this);
    }
}
// user.WelcomeMessage() // yaha tak current contex same hai
// user.username = "Sam" // But yaha pe current Contex change ho gya
// user.WelcomeMessage()

// console.log(this);


// function one(){
//     let username = "Shubham"
//     console.log(this.username);
// }
// one()
// const two = function (){
//     let username = "Shubham"
//     console.log(this.username);
// }
// two()

// arrow function creation
// const two =  () =>{
//     let username = "Shubham"
//     console.log(this);
// }
// two()

//  this is (() => {}) called arrow function
// const addTwo = (num1 ,num2) => {
//     return num1 + num2
// }


// return implicit 
// const addTwo = (num1 ,num2) =>   num1 + num2

// const addTwo = (num1 ,num2) =>   (num1 + num2)

// return object 
const addTwo = (num1 ,num2) =>  ( {username: "Shubham"})
console.log(addTwo(4,8));

