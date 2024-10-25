const ValidParanthesis = (s) => {
    let splitedvalue = s.split("");
    let emptyarr=[];
for(i=0;i<splitedvalue.length;i++){
    if(splitedvalue[i]==='('|| splitedvalue[i]==='{' ||  splitedvalue[i]==='[' ){
        emptyarr.push(splitedvalue[i]);
    }
    else if(splitedvalue[i] === ')' && emptyarr[emptyarr.length-1] ==='(' || splitedvalue[i] === '}' && emptyarr[emptyarr.length-1] ==='{' || splitedvalue[i] === ']' && emptyarr[emptyarr.length-1] ==='[' ){
            emptyarr.pop();
           
        }
       else{
        return false
       }
}
       return emptyarr.length==0
    
    
}

console.log(ValidParanthesis("{()}"));

