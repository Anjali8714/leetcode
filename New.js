let reverseWords = function(s) {
    let splitedvalue = s.split(' ');
    let reversedvalue = splitedvalue.map(word => word.split('').reverse().join('')).join(' ');   
    return reversedvalue;
}

console.log(reverseWords("Let's take LeetCode contest"));

