// Immediately Invoked Function Expression (IIFE)


//If there is a problem due to pollution of global scope then we use IIFE to remove the pollution.
(function man(){ // it is called named IIFE
    console.log(`DB CONNECTED`);
})();
// The invoked function does not know where to stop the context. In JavaScript, a semicolon is used to stop it.(;)

( (name) => { //it is called simple IIFE
    console.log(`2DB CONNECTED ${name}`)
} )('shubham')