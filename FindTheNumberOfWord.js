

const mostWordsFound = function(sentences){
    let words;
    let result=0;
    for(i=0 ; i< sentences.length ; i++){
        words = sentences[i].split(' ');
        result = Math.max(result,words.length);
    }
    return result
}

console.log(mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"]));


