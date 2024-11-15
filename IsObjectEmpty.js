const isEmpty = (obj) => {
    let len = Object.keys(obj).length;
    if(len == 0){
        return true 
    }
    return false
}
console.log(isEmpty([null, false, 0]));
