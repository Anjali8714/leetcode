var addDigit=function(num){
    str=num.toString();
    splitnumber=str.split("");
    res=splitnumber.reduce((acc,n) => acc+Number(n),0);
    if(res>=10){
        addDigit(res)
    }
    return res
    
    
}
console.log(addDigit(38));
