function ispalindrome(s){
    let a=s.toLowerCase();
    let b=a.replace(/[^a-zA-Z0-9]+/g,"");
    let r=b.split("").reverse().join("");
    if(r==b)
        return true      
    else
        return false
}
console.log(ispalindrome("ab_a"));   