const User = {
    _email: 'shubham@fang.com',
    _password : 'Radhe radhe',


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
