// const name = "Hello" + " World "
// const repoCount = 50

// ////This is a very old way of writing strings
// // console.log(name + repoCount + " value");

// // The new method is string manipulation and we create placeholders and can directly inject whatever value they have.
//always use this method 
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
// console.log(gameName.toUpperCase(gameName));
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));


// const newString = gameName.substring(0,4);
// console.log(newString);


// in Slice function you can give negative value
// const anotherString = gameName.slice(-18,7)
// console.log(anotherString);


// const newStringOne = "  Shubham   "
// console.log(newStringOne);
// console.log(newStringOne.trim()); //trim is use for remove extra spaces


// When you want to add space in the URL, it appears as (%20), use replace for that.
const url = "https://shubham.com/shubham%20dubey"

const web = url.replace('%20', '-')

console.log(web);

console.log(url.includes('shubham'));//include use for serach keyword in url

console.log(gameName.split('-'));//split use for split a word based on array