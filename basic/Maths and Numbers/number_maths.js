// const score = 400
// console.log(score);
 
// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);// to convert in  string
// console.log(balance.toFixed(2));// toFixed is use for decimal value print

// const otherNumber = 123.8564;

// console.log(otherNumber.toPrecision(3));// toPrecision are given the outpot aprox of given data

// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));// It puts a comma inside the value.


// // +++++++++++++++++++++++++++++++++++++++++++++++++++++( MATHS )++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-6));
// console.log(Math.round(4.3)); //it gives round off value

// console.log(Math.ceil(4.3)); //It takes the value of the above
// console.log(Math.floor(4.9)); //It takes the value of the below
// console.log(Math.min(4,5,7,6,2,1,8,3,4)); //It founds minimum in array
// console.log(Math.max(4,5,7,6,2,1,8,3,4)); //It founds miximum in array


console.log(Math.random()); //It gives random value in 0 to 1
// in project to we need some value 1 to 9 than we use this method
console.log(Math.random()*10+1); 
console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1); 

const min = 10
const max = 20

// it is a type of formula which through we are set random value
console.log(Math.floor(Math.random()*(max - min + 1)) + min);