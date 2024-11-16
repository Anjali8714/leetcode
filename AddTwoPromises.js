const AddTwoPromise =async (promise1 , promise2) => {
    const [a, b] = await Promise.all([promise1 , promise2]);
    let result = a+b
     return result
}
AddTwoPromise(
    new Promise(resolve => setTimeout(() => resolve(2), 20)),
    new Promise(resolve => setTimeout(() => resolve(5), 60))
).then(result => console.log(result));