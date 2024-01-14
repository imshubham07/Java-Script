//singleton =>  When an object is created from a constructor, a singleton object is created.

//  Object.create
// Object Literals



const mySym = Symbol("key1")


const jsUser = {
  name: "Shubham",
  "full Name": "Shubham Dubey",
  [mySym]: "myKey1",
  age: 21,
  location: "Raipur",
  email: "Shubham@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log(jsUser.email); //Access elements inside an object
// console.log(jsUser["age"]); //another Method to access element inside an object
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym] );

jsUser.email = "shubham@google.com";
// Object.freeze(jsUser)//freeze hone pe value change nhi kar sakte hai
jsUser.email = "shubham@fang.com"
// console.log(jsUser)

jsUser.greeting = function () {
  console.log("hello JS User");
}

console.log(jsUser.greeting);