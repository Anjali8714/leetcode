let detectCapitalUse = function(word) {
    return word === word.toUpperCase() ||
    word === word.toLowerCase() || 
    (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase())
}

console.log(detectCapitalUse("USA"));
