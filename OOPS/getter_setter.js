class User{
    constructor(email, password){
        this.email= email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shubham`
    }

    set password(value){
        this._password= value
    }
}

const shubham = new User("shubham@google.com", "Password")
console.log(shubham.password);
console.log(shubham.email);