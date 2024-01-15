// const tinderUser = new Object() // it is singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "MD Aftab Alam"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email:"user@gmail.com",
    fullName:{
        userFullName:{
             firstname: "Manish",
             lastname: "gupta"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstname);// acess to nested object


// concate of two object 
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)   
const obj3 = {...obj1, ...obj2}
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
]

users[1].email
console.log(tinderUser); 
console.log(Object.keys(tinderUser)); // use object as array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); 


console.log(tinderUser.hasOwnProperty('isLoggedIn'));// hasOnProperty Checks whether the Value exists or not
