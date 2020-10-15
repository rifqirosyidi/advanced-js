// constructor function 
// const People = function() {
//     this.nama = 'Name'
//     this.umur = 33
//     this.sayHi = function() {
//         console.log(`Hi ${this.nama}, i am ${this.umur}`)
//     }
//     console.log(this)
// } 

// const people = new People()


// Arrow Function
const People = function() {
    this.nama = 'Name'
    this.umur = 33
    this.sayHi = function() {
        console.log(`Hi ${this.nama}, i am ${this.umur}`)
    }

    // setInterval(() => {
    //     console.log(this.umur++)
    // }, 500)

    console.log(this)
} 

const people = new People()