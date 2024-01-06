// const name = "Hello" + " World "
// const repoCount = 50

// ////This is a very old way of writing strings
// // console.log(name + repoCount + " value");

// // The new method is string manipulation and we create placeholders and can directly inject whatever value they have.
// console.log(`hello my name is  ${name} and my repoCount is ${repoCount}`);//${} use for writen value of string in console log

//string Declearation another type
const gameName = new String('shubham-kumar-dubey')

// // value excess in string
// console.log(gameName[0]);
// //exccess to Prototype of a String
// console.log(gameName.__proto__);
// // to cheak how many element in a String
// console.log(gameName.length);
// using prototype function 
console.log(gameName.toUpperCase(gameName));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));


const newString = gameName.substring(0,4);
console.log(newString);


// in Slice function you can give negative value
const anotherString = gameName.slice(-4,-8)
console.log(anotherString);
 
