const DivideTwoIntegers = (dividend , divisor) => {
   
        let divide=dividend/divisor;
        let result =Math.trunc(divide);
        if (divisor === -1) {
            return (dividend === -2147483648) ? 2147483647 : -dividend;
        }
        return result
    
}
console.log(DivideTwoIntegers(7 , -3));
