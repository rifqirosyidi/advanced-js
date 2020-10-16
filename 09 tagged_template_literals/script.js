const myName = "Some Name"
const myAge = 20

function testtag(strings, ...args) {
    // let res = ''
    // strings.forEach((s, i) => {
    //     res += `${s}${args[i] || ''}`
    // })
    // return res

    return strings.reduce((res, str, i) => `${res}${str}<span class="some-effect">${args[i] || ''}</span>`, '')
}

const str = testtag`Hi ${myName}, i am ${myAge}`
document.body.innerHTML = str

// Usage of Tagged Template
// Escape HTML Tag, Translation, Styled Component