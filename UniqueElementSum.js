var sumOfUnique = function(nums) {
    const uniqueElement = nums.filter((item)=>nums.indexOf(item) === nums.lastIndexOf(item));
    return uniqueElement.reduce((acc,cur) => acc+cur,0)
}
console.log(sumOfUnique([1,2,3,2,4]));
