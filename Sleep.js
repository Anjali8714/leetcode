async function sleep(millis) {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },millis)
    })

    return promise
}
console.log(sleep(100));
