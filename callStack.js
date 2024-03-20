function one() {
    console.log("love")
    two()
}
function two(){
    console.log("with")
    three()
}
function three(){
    console.log("code")
}
one()
two()
three()