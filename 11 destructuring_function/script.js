function addMult(a, b) {
    return [a + b, a * b]
}
const [totalSum, totalMult] = addMult(2, 5)

console.log(totalSum, totalMult)

// Same Example but using object
function calcNum(a, b) {
    return {
        add: a + b,
        sub: a - b,
        mul: a * b,
        div: a / b,
    }
}

const { add, sub, div, mul } = calcNum(9, 9)
console.log(add, sub, div, mul)


const peopleOne = {
    name: "Ling",
    age: 16,
    email: "ling@mail.com",
    report: {
        math: 3.2,
        sociology: 3.0,
        compsci: 3.9
    }
}

function displayPeople({name, age, report: {math, sociology, compsci}}) {
    return `Hi, ${name}, ${age} yo, my math report was ${math}`
}

console.log(displayPeople(peopleOne))