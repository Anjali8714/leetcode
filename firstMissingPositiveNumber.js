let firstMissingPositive = function(nums) {
    let x = 1;
    nums.sort((a, b) => a-b);
    for(let i=0; i<nums.length; i++) {
        if(nums[i] == x){
            x++;
        } 
    }
    return x;
}
console.log(firstMissingPositive([1,2,0]));
