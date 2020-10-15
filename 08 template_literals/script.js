const name = 'My Name'
const age = 20

console.log(`Hi, ${name}, i am ${age}`)

// Embedded Expression
console.log(`${2*10+8}`)

const n = 10
console.log(`${ ( n > 12 ) ? 'Kurang dari 12': 'Lebih dari 12' }`)

// HTML Fragment
const people = {
    name: 'People',
    age: 22,
    nrp: '0012000',
    email: 'people@people.com'
}

const el = `
    <div class="people">
        <h2>${people.nama}</h2>
        <span>${people.nrp}</span>
    </div>
`