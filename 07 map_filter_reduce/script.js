const angka = [-1, -7, 8, 4, 11, 1, 8, -6, 9, 3, 3, 4, 5, 7]
const newAngka = []

// try to find > 3
// using for
for (let i = 0; i < angka.length; i++) {
    if (angka[i] > 3) {
        newAngka.push(angka[i])
    }
}
console.log(newAngka)

// using filter
const angkaBaru = angka.filter(n => n > 3)
console.log(angkaBaru)


// using map
// create new list with n*2
const kaliDua = angka.map(n => n*2)
console.log(kaliDua)


// using reduce
// sum all element in array
const sumByReduce = angka.reduce((accumulator, curr) => {
    return accumulator + curr
})
console.log(sumByReduce)


// chaining
// find > 6
// times 3
// sum all together
const hasil = angka.filter(n => n > 6) // 8. 11, 8, 9 ,7
.map(n => n * 3 ) // 24, 33, 24, 27, 21
.reduce((a, b) => a + b ) //

console.log(hasil)