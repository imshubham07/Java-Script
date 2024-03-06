// For of 

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]


// for (const num of arr) {
//     // console.log(num);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each Char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('In', "India")

// console.log(map);

// agar apko value array ke form me nahi chaiye to ye use karenge
for (const [key,value] of map) {
    // console.log(key,':-' ,value);
}


const myObject =  {
    'Game1': 'NFS',
    'Game2': 'Spiderman',
    'Game3': 'BGMI',
    
}
//  