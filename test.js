function test(fn) {
    let timer = null
    clearTimeout(timer)
    timer = setTimeout(() => {
        fn.call(this,arguments)
    }, timeout); 
}

window.onmousemove = test(() => console.log(333)
)