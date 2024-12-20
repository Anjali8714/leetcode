var checkPerfectNumber = function(num) {
    let sum = 0;
    for(i=1 ; i<= num/2 ; i++){
        if(num%i==0){
            // console.log(i)
            sum+=i;
        }
    }
        // console.log("sum",sum)
        if(sum == num){
            return true
        }
    
    return false
}
console.log(checkPerfectNumber(2016))
