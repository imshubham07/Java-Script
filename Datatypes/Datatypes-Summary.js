/*
* Premitive Datatypes

                Type                                 typeof

i)             Number                                number
ii)            String                                String
iii)           Boolean                               boolean
iv)            Bigint                                bigint
v)             Symbol                                symbol
vi)            Null                                  object
vii)           Undefined                             undefined
*/


//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Batman", "Thor"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/*
* Non-Premitive OR Referance OR Object datatype
                 Type                                  typeof

i               Object                                object
ii              Array                                  object
iii            Function                            function(object)
*/
