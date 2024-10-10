function ContainsDuplicate(nums){

  for(let val of nums){
    res=nums.indexOf(val);
    result=nums.lastIndexOf(val);
    if(res!==result)
       {
           return true
            
        }
     }
    return false
    
}
console.log(ContainsDuplicate([1,2,3,1]));

     
    


