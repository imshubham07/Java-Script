const promiseOne = new Promise(function(resolve, reject){
    //Do an async Task
    //DataBase Calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is Compelete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// Another type you can make Promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            userName : "shubham",
            email : "shubham@example.com"
        })
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
            if (!error) {
                resolve({
                    username: "shubham",
                    password: "user@12"
                })
            } else {
                reject('Error: Something went wrong')
            }
    }, 1000)
}, 1000)

promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The Promise either Resolve or Rejected"));

const promiseFive  = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({userName: "javaScript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
 
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() 
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));