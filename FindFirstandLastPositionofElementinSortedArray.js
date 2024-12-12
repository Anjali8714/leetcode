const findPosition= (nums,target)=>{ 
    let start = 0;
    let end = nums.length-1;
    let res1 = -1
    let res2 = -1

    while(start <= end){

        if(nums[start] === target){
             res1 = start
        }else{
        start ++
        }
         if(nums[end] === target){
             res2 = end
        }else{
        end --
        }
    if(res1!= -1 && res2 !=-1){
        return [res1, res2]
    }
    }
    return [res1,res2]
}
console.log(findPosition([5,7,7,8,8,10],8));
