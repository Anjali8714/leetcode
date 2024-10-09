const SearchInsertPosition = function (nums , target){
    if(nums.includes(target)){
       return nums.indexOf(target)
    }else {
         for(i=0;i<=nums.length;i++){
            if(i==nums.length)
                return i
            if(nums[i]>target){
                return i
                
            }
            
         }
    }
}
console.log(SearchInsertPosition([1,3,5,6] , 2));
