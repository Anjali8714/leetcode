const DivandNondivofsumdif = (n,m) => {
    let num1=0;
    let num2=0
    for(i=1;i<=n;i++){
        if(i%m!==0){           
            num1+=i
        }else{
            num2+=i
        }
    }
    let result =num1-num2;

    return result
}

console.log(DivandNondivofsumdif(5,6));

