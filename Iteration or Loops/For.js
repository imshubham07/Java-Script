//For Loops

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         // console.log("5 is best Number");
//     }
//     // console.log(element);
// }

// // console.log(element);

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop :${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop ${j} and Outer loop ${i}`);
//         // console.log(i + '*' + j + '=' + i*j);
//     } 
// }

// let myArray = [ "flash", "Batman", "Supperman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// Break And Continue keyword

// for (let index = 0; index < 20; index++) {
//     if (index == 5) {
//         console.log('Detected');
//         break
//     }
//     console.log(`Value of i is ${index}`);   
// }


for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log('Detected');
        continue
    }
    console.log(`Value of i is ${index}`);   
}