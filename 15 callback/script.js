// // Synchronous Callback
// function sayHi(name) {
//     alert(`Hi ${name}`)
// }

// function showMessage(callback) {
//     const name = prompt('Enter Name: ')
//     callback(name)
// }

// showMessage(sayHi)


// test
// const people = [
//     { name: "One", email: "mailone@one.com" },
//     { name: "Two", email: "mailtwo@two.com" },
//     { name: "Three", email: "mailthree@three.com" },
// ]

// console.log('START')
// people.forEach(m => {
//     for (let i = 0; i < 10000000; i ++) {
//         let date= new Date()
//     }
//     console.log(m)
// })
// console.log('FINISH')



// Asynchronous Test
function getFirstNameFromData(url, success, error) {
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response)
            } else if (xhr.status === 404) {
                error()
            }
        }
    }

    xhr.open('get', url)
    xhr.send()
}

console.log("MULAI")
getFirstNameFromData('data.json', 
(results) => {
    const citizen = JSON.parse(results)
    citizen.forEach(c => { console.log(c.first_name)})
}, 
() => {

})
console.log("SELESAI")