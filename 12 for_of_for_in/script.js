const citizen = ['Eric', 'Hil', 'Rem']

// default for
for (let i =0; i<citizen.length; i++) {
    console.log(citizen[i])
}

// using forEach
citizen.forEach(c => console.log(c))


// using for of
for (const m of citizen) {
    console.log(m)
}


// String Iterables -> you cant use forEach in Str
const myString = "This is My String"
for (const n of myString) {
    console.log(n)
}


// Get index in forEach citizen
citizen.forEach((k, i) => console.log(`${k} is the ${i} people`))


// you cant get index from for of
for (const j of citizen) { console.log(j)}

// if you really need i in for of
for (const [a, b] of citizen.entries()) {
    console.log(a, b)
}


// Node List Iterables -> usually get from DOM
const liName = document.querySelectorAll('.name')
liName.forEach(n => console.log(n.innerHTML))


// Args -> can only be done by For Of
function addNum() {
    let sum = 0
    for (a of arguments) {
        sum += a;
    }
    return sum
}

console.log(addNum(1, 2, 3, 4, 5))


// For In
// Create Loop Only Iterate over Enumerable

// Note
// Enumerate Object use FOR IN
// Enumerate Array / Others use FOR OF

const peopleObj = {
    name: "People",
    age: 22,
    email: "people@mail.co"
}

for (people in peopleObj) {
    console.log(people, peopleObj[people])
}