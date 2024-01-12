//Array
const myArr = [0, 1, 2, 3, 4, 5, 6];
const myHeros = ["shaktiman", "Naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6);
// console.log(myArr[1]);

//Array Method

// myArr.push(8)
// myArr.push(7)
// myArr.pop() // There is no need to give value in pop, it deletes the last value.

// myArr.unshift(9)// adds the element to the fist in the array.
// myArr.shift()// delete the fist element of an array

// console.log(myArr.includes(9));// adds the value to the fist in the array.
// console.log(myArr.indexOf(9));//  if value not found than they return (-1)

// const newArr = myArr.join()// join convert the value array to string
// console.log(myArr);
// console.log(typeof newArr);

// *****imp method****
//slice splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // slice not manuplatre original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //splice manupalte original array
console.log(myn2);