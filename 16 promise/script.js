// Using Jquery
$.ajax({
    url: 'http://omdbapi.com/?i=tt3896198&apikey=9342461d&s=avengers',
    success: (response) => {console.log(response)}
})


// Using Modern JS Fetch
fetch('http://omdbapi.com/?i=tt3896198&apikey=9342461d&s=avengers')
    .then(res => res.json())
    .then(res => console.log(res))


// Promise
// menentukan keberhasilan / kegagalan event asyncronous in the future

// janji (terpenuhi / tidak)
// state (fullfill / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then, catch)


// example one
let fulfilled = true
const promiseOne = new Promise((resolve, reject) => {
    if (fulfilled) {
        setTimeout(() => {
            resolve('Fulfilled after 2s')
        }, 2000)
    } else {
        reject('Not Fulfilled')
    }
})

promiseOne
    // If fullfilled
    .then(res => console.log(`OK: ${res}`))
    // else
    .catch(res => console.log(`NOT OK: ${res}`))



// PromiseAll
// Many Promises muti req to api

const music = new Promise( resolve => {
    setTimeout(() => {
        resolve([
            {title: "Music One", price: "$56"}
        ])
    }, 1000)
})

const weather = new Promise( resolve => {
    setTimeout(() => {
        resolve([
            { city: "Malang", temp: 32}
        ])
    }, 500)
})

// How do you get
// music.then(res => console.log(res))
// weather.then(res => console.log(res))
Promise.all([music, weather])
    .then(res => {
        const [music, weather] = res
        console.log(music)
    })