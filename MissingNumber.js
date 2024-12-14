var missingNumber = function(nums) {
    let len = nums.length;   
    let sum = (len*(len+1))/2;   
    let sum1 = nums.reduce((acc,item)=>acc+item);   
    let result = sum-sum1;
    return result
}
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
