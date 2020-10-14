// //  Obj Literals

// let mhs = {
//     nama: "Rifqi", 
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi
//     },
//     main: function(jam) {
//         this.energi -= jam
//     }
// }

// // Function Declaration

// const mehthodMhs = {
//     makan: function(porsi) {
//         this.energi += porsi
//     },

//     main: function(jam) {
//         this.energi -= jam
//     },

//     tidur: function(jam) {
//         this.energi += jam*2
//     }
// }

// function mhsBaru(nama, energi) {
//     let mhs = Object.create(mehthodMhs)

//     mhs.nama = nama
//     mhs.energi = energi

//     return mhs
// }

// let mhs2 = mhsBaru("Erik", 20)


// Using Constructor
function Mahasiswa(nama, energi) {
    this.nama = nama
    this.energi = energi
}

// Prototype / Method as you call in class based
Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam
}

Mahasiswa.prototype.tidur = function(jam) {
    this.energi += jam
}

let rifqi = new Mahasiswa("Rifqi Rosyidi", 100)
console.log(rifqi)