// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Selesai")
//     }, 2000)
// })

// coba.then(() => console.log(coba))


function tryPromise() {
    return new Promise((resolve, reject) => {
        const n = 6000
        if (n < 5000) {
            setTimeout(() => {
                resolve("Selesai")
            }, n)
        } else {
            reject("Time out")
        }
        
    })
}

// tryPromise = tryPromise();

// tryPromise
//     .then(() => console.log(tryPromise))
//     .catch(() => console.log(tryPromise))


async function tryAsync() {
    try {
        const coba = await tryPromise()
        console.log(coba)
    } catch (err) {
        console.log(err)
    }
}

tryAsync()