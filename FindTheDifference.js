

const FindTheDifference = (s,t) => {
    
    for(let word of s){
        t=t.replace(word,'')
      }
      return t
}

 console.log(FindTheDifference("abcd" , "abcde"));
 
