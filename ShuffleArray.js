const shuffle = function(nums, n) {
    let pushedvalue = [];
    for(i=0;i<n;i++){
       pushedvalue.push(nums[i],nums[i+n]);
    }
    return pushedvalue
}
console.log(shuffle([2,5,1,3,4,7],3));
