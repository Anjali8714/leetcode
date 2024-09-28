let sortedSquares=function(nums){
a=nums.map(num => Math.pow(num,2));
b=a.sort((a,b) => a-b);
console.log(b);
}
sortedSquares([-7,-3,2,3,11]);