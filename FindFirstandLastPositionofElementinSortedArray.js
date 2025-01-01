let searchRange = function(nums, target) {
    let arr = [];
    if (nums.includes(target)) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                arr.push(i);
            }
        }
        arr.length == 1 ? arr.push(arr[0]) : arr = [arr[0], arr[arr.length - 1]];
        return arr;
    }
    return arr = [-1, -1];
};
console.log(searchRange([5,7,7,8,8,10],8));
