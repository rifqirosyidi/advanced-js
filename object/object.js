// ===== Many Ways To Create Object ===== //

// Object Literals
let mhs = {
    nama: "Test Mahasiswa",
    nim: "00.00.0000",
    email: "test.mail@gmail.com",
    jurusan: "Some Jurusan"
}


// Function Declaration
function buatObjMhs(nama, nim, email, jurusan) {
    let mhs = {}

    mhs.nama = nama
    mhs.nim = nim
    mhs.email = email
    mhs.jurusan = jurusan

    return mhs
}

let mhs3 = buatObjMhs("Mahasiswa Dua", "00.00.000", "liquid.hidrogen@gmail.com", "Marketting")

// Using Constructor
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama,
    this.nim = nim,
    this.email = email,
    this.jurusan = jurusan
}

let mhs4 = new Mahasiswa("Mahasiswa Empat", "04.44.0404", "empat04@gmail.com", "Empat Jurusan")



// ===== This keyword =====
console.log(this === window)

// let people = {
//     nama: 'Rifqi',
//     umur: 22,
//     pekerjaan: 'Dev',
//     sapa: function() {
//         return `Hello, This is ${ this.nama }, ${ this.umur }, I'm ${ this.pekerjaan } ` 
//     }
// }

// console.log(people.nama, people.sapa())


// let mhs = {}
// console.log(mhs)

