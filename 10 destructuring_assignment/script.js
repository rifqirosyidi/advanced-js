// Arr Destructuring
const arr_demo = ['one', 'two', 'three']
const [t, u, v] = arr_demo
console.log(t, u, v)
// --- get a and c only
// const [a, , c] = arr_demo


// Obj Destructuring
const obj_demo = {
    name: "People",
    age: 21,
    email: 'people@mail.co',
    welcome: 'G Morning'
}
const {name, age, email} = obj_demo
console.log(name, age, email)


// Reassign to simple value
const {name: n, age: a, email: e} = obj_demo
console.log(n, a, e)


// Default val
const {na, ag, em = "default@email.co", ad = "some adress"} = obj_demo
console.log(na, ag, em, ad)


// Swap Items
let x = 1;
let y = 2;
[x, y] = [y, x] 
console.log(x, y)


// return val func
function test() {
    return [5, 6]
}

const [k, l ] = test()
console.log(k, l)


// Rest Params / args
const [f, g, ...args] = [1, 3, 4, 6, 7,8]
console.log(f, g, args)



// Function Destructuring
function getEmailPeople({email}) {
    return email;
}
console.log(getEmailPeople(obj_demo))