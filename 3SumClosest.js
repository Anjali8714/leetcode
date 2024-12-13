let SumClosest = (nums,target) => {
   
        // Step 1: Sort the array to use the two-pointer approach
        nums.sort((a, b) => a - b);
    
        let closestSum = Infinity;
    
        // Step 2: Iterate through the array
        for (let i = 0; i < nums.length - 2; i++) {
            let left = i + 1; // Start of the two-pointer
            let right = nums.length - 1; // End of the two-pointer
    
            while (left < right) {
                let currentSum = nums[i] + nums[left] + nums[right];
    
                // Update closestSum if the current sum is closer to the target
                if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                    closestSum = currentSum;
                }
    
                // Move pointers based on the currentSum compared to the target
                if (currentSum < target) {
                    left++;
                } else if (currentSum > target) {
                    right--;
                } else {
                    // If the exact target is found, return it
                    return currentSum;
                }
            }
        }
    
        return closestSum;
  
    
}
console.log(SumClosest([-1,2,1,-4],1));
