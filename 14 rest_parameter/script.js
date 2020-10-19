
function myFunct(a, b, ...args) {
    return `a: ${a}, b: ${b}, args: ${args}`
}

console.log(myFunct(1,2,3,4,5,6))


function sumAny(...args) {
    let total = 0
    for (const a of args) {
        total += a
    }
    return total
}

console.log(sumAny(1,2))