const name = 'My Name'
const age = 20

console.log(`Hi, ${name}, i am ${age}`)

// Embedded Expression
console.log(`${2*10+8}`)

const n = 10
console.log(`${ ( n > 12 ) ? 'Kurang dari 12': 'Lebih dari 12' }`)

// HTML Fragment
const list_people = [
    {
        name: 'People',
        email: 'people@people.com'
    },
    {
        name: 'Doddi',
        email: 'doddy@doddy.com'
    },
    {
        name: 'Erik',
        email: 'erik@erik.com'
    }

]

const el = `
    <div class="people">
    ${list_people.map(people => `
        <h2>${people.name}</h2>
        <span>${people.email}</span>    
    `).join("")}
    </div>
`

document.querySelector('.el1').innerHTML = el

// Nested Html Fragment

const author = {
    name: 'Some Author',
    desc: 'Description of some author',
    books: [
        'Book One',
        'Fantasy Universe',
        'End World',
        'Signature'
    ]
}

function displayListOfBooks(books) {
    return `
        <ol>
        ${books.map(book => `
            <li>${book}</li>
        `).join('')}
        </ol>
    `
}

const el2 = `
    <div class="author">
        <h2>${author.name}</h2>
        <p>${author.desc}</p>
        <h4>List of Book: </h4>
        ${displayListOfBooks(author.books)}
    </div>
`

document.querySelector('.el2').innerHTML = el2