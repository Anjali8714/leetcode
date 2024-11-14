const scoreOfString =(s)=>{
    let sum = 0;
    for(i=1;i<s.length;i++){
         sum += Math.abs(s.charCodeAt(i)-s.charCodeAt(i-1));
    }
        return sum
   
    
}
console.log(scoreOfString('hello'));
