const FindWordsCtngChar = (words , x) => {
    let indexvalue = [];
    for(i = 0 ; i < words.length ; i ++ ){
        if(words[i].includes(x)){
            indexvalue.push(i)
        }
    }
    return indexvalue
}

console.log(FindWordsCtngChar(["abc","bcd","aaaa","cbc"] , 'z'));
