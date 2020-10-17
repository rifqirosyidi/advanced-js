// Spread Opertaor 

const people = ['one', 'two', 'three']
const morePeople = ['four', 'five']
console.log(...people)


// using for Joining Two Array
const joinPeople = [...people, ...morePeople]
console.log(joinPeople)

// insert some peple in midle
const insPeople = [...people, 'Nine', ...morePeople]
console.log(insPeople)

// Copy Arr
const copyPeople = [...people]
console.log(copyPeople)


// const liItem = document.querySelectorAll('li')

// // default
// const item = []
// for (let i = 0; i < liItem.length; i ++) {
//     item.push(liItem[i].textContent)
// }
// console.log(item)


// using map wont work until you conv to arr

// Not work
// const mapItem = liItem.map(m => m.textContent)

// Work
// const workingMapItem = [...liItem].map(m => console.log(m.textContent))


const elNama = document.querySelector('.nama')
const word = [...elNama.textContent].map(w => `<span>${w}</span>`).join("")
elNama.innerHTML = word