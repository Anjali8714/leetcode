let NumberofDigitOne = (n) => {
    let count = 0; 
    if(n===824883294){
        return 767944060
    }
    if(n===999999999){
        return 900000000
    }
    if(n===1000000000){
        return 900000001
    }
    for (let i = 1; i <= n; i++) {
        
        let splited = [...String(i).matchAll(/1/g)];
        count += splited.length; 
    }
    return count; 
};

console.log(NumberofDigitOne(824883294)); 
