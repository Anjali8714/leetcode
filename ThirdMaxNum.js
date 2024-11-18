var thirdMax = function(nums) {
    let distinctNum = [...new Set(nums)];
    distinctNum.sort((a,b) => b-a);
    if(distinctNum.length <3){
        return distinctNum[0]
    }
    return distinctNum[2]
}
console.log(thirdMax([2,2,3,1]));

