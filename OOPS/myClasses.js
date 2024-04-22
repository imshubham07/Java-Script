// ES6

// class User{
//     constructor (username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password  = password
//     }

//     encryptPassword(){
//         return `${this.password} radhe radhe`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const shubham = new User("shubham", "shubham@ai.com", "Bolo")
// console.log(shubham.encryptPassword());
// console.log(shubham.changeUsername());

// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function(){
    return `${this.password} radhe radhe`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const deo = new User("deo", "deo@ai.com", "Bolo")
console.log(deo.encryptPassword());
console.log(deo.changeUsername());