// Nested Scope

function one(){
    const username = "shubham"

    function two (){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "shubham Dubey"
    if (username === "shubham Dubey"){
        const website = "Github"
        // console.log(username+website);
    }
    // console.log(website); // This will give the error that the cookie cannot access the website outside its scope.
}
// console.log(username);//This will give the error that the cookie cannot access the website outside its scope.



//+++++++++++++++++++++++++++++++++++++++++++++     (INTERESTING)    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


// this is called function
console.log(addone(7))
function  addone(num){
    return num + 1
}


// This is also a function, but sometimes it is called an expression.
const addtwo = function(num){ 
    return num + 2
}
addtwo(8)