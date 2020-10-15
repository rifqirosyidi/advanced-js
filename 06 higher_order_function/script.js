function doTask(name, done) {
    console.log(`Doing task: ${name} ...`)
    done()
}

function done() {
    console.log("Completed!")
}

doTask('Figma', done)


// Example 
function doRepeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}

doRepeat(10, console.log)