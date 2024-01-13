const marval_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "flash"]

//  marval_heros.push(dc_heros)
//  //This shows that in JavaScript there is an array within an array.
//  console.log(marval_heros);
//  console.log(marval_heros[3][1]);


//  const allHeros = marval_heros.concat(dc_heros)//joint off two string
//  console.log(allHeros);


// const all_new_heros = [...marval_heros, ...dc_heros] // this is spreadsheet(...)After doing this in the spreadsheet, the array no longer exists, it becomes invisible.
// console.log(all_new_heros);


// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_arr = another_arr.flat(Infinity ) // It tells how many numbers to search and it will reach that number of offices.
// console.log(real_another_arr);



console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));
// Intersting Case because we are make an array through key
console.log(Array.from({name: "Shubham"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
