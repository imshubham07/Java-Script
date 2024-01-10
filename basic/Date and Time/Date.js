// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// in single digit months are start with zero in javaScript
// let myCreatedDate = new Date(2024, 0, 16)
// let myCreatedDate = new Date(2024, 0, 16, 5,  3)
// let myCreatedDate = new Date("2024-01-16")// Date write with another type & months start with 1 
let myCreatedDate = new Date("10-16-2023")// Date write with another type & months start with 1 
// console.log(myCreatedDate.toLocaleString());



let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


// `${newDate.getDay()} and the time`


newDate.toLocaleString('default',{
    weekday:"long"
})
