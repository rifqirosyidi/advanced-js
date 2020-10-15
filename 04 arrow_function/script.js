// ===== Default Function =====
function displayName(name) {
    return 'Hi ' + name
}
// Run
console.log(displayName('Name'))


// ===== Arrow Function =====
const showName = (name) => {
    return `Hi ${name}`
}
// Run
console.log(showName("My Name"))


const twoArgs = (first, second) => {
    return `This is ${first} and ${second} Arguments`
}
// Run
console.log(twoArgs("First", "Second"))


const noArgs = () => {
    return `No Args`
}
console.log(noArgs())


const implisitReturn = () => `Hi`
// Run
console.log(implisitReturn())


// Some Array
let people = ['First', 'Second', 'Third']
let lenChar = people.map(name => name.length)
console.log(lenChar)

// return as new Object
let newPeople = people.map(name => ({ name: name, len: name.length }))
console.table(newPeople)
