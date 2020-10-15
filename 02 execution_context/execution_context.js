

// EXECUTION CONTEXT, HOISTING, SCOPE

// undefined
console.log(my_name)
var my_name = "Some Names"

// ==== CREATION PHASE ====
// Creation - Check keyword var/func
// hoisting
// initial var = undefined
// initial func = fn()

// initial 
// window = global obj
// this = window
// console.log(window)


// ==== EXECUTION PHASE ====
console.log(sayHello()) // Hi undefined i am undefined

var myName = "My Name"
var myAge = 20

console.log(sayHello()) // Hi My Name i am 20
function sayHello() {
    return `Hi ${myName} i am ${myAge}`
}

// Func create Local Exec Context => it has creation and execution phase
// window, arguments, hoisting

// Example
var yourName = "Your Name"
var username = "@username"

function printURL(username) {
    var baseURL = 'https://baseurl.com/'
    return baseURL + username
}

function printSecondURLWithoutParams() {
    // Name One and Name Two can be accessed via Arguments
    console.log("ARGUMENTS : ", arguments[0], arguments[1])
    var baseURL = 'https://baseurl.com/'
    return baseURL + username // username look in global var
}
 

console.log("With Params", printURL(username))
console.log("Without Params", printSecondURLWithoutParams("Name One", "Name Two"))
// check Javascript Visualizer website, See How JS Execute your programs


// Other Example

function a() {
    console.log("This is A")
    
    function b() {
        console.log("This is B")

        function c() {
            console.log("This is C")
        }

        c()
    }

    b()
}

a()


// Exercise 
console.log("===== EXERCISE =====")
function one() {
    var product = "Smartphone"
    console.log(product)
}

function sec() {
    console.log(product)
}

console.log(product)
var product  = "Laptop"
one()
sec("Keyboard")
console.log(product)