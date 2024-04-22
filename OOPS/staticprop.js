class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);

    }

    static createId(){
        return Math.random()*10+1
    }
}

const shubham = new User("shubham")
// console.log(shubham.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId());