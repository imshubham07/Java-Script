class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends  User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const  manish = new Teacher ("Manish", "manish@rail.com", "Radhe Radhe")
manish.addCourse()
manish.logMe()

const deo = new User("deoPrakash")
deo.logMe()

console.log(manish instanceof User);