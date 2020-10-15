// See closure using console.dir

// function init() {
//     let myName = "My Name"
//     let myAge = 20
//     function displayName() {
//         console.log(myName)
//         console.log(myAge)
//     }

//     console.dir(displayName)
// }

// init()






// function init() {
//     // let myName = "My Name"
//     function displayName(myName) {
//         console.log(myName)
//     }

//     return displayName
// }

// let callName = init()
// // callName()
// callName("Another Name")


function sayHi(time) {
    return function(name) {
        console.log(`Hi ${name}, Good ${time}`)
    }
}

// Factory Function
let goodMorning = sayHi('Morning')
let goodAfternoon = sayHi('Afternoon')
let goodNight = sayHi('Night')

goodMorning("Eric")
goodNight("Tim")


// Counter

let add = function() {
    let counter = 0 
    return function() {
        return ++counter
    }
}

// how to invoke immediately without this reassigning function to var?
let a = add()

console.log(a())
console.log(a())

let addNum = (function(){
    let counter = 0
    return function() {
        return ++counter
    }
})()

// Use This 
console.log(addNum())
console.log(addNum())
