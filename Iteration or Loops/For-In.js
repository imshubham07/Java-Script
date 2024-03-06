const myObject = {
    js:'javaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple'
}

// For In Loops
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for  ${myObject[key]}`);
}

const programming = ["js", "Rubby", "Java","C++"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}


// For in Loop me Map ke uper Iteation nahi kiya ja sakta hai
// const map = new Map()
// map.set('In', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")
// map.set('In', "India")

// for (const key in map) {
//     console.log(map);
// }