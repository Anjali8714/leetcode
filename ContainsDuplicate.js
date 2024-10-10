// function ContainsDuplicate(nums){

//   for(let val of nums){
//     res=nums.indexOf(val);
//     result=nums.lastIndexOf(val);
//     if(res!==result)
//        {
//            return true
            
//         }
//      }
//     return false
    
// }
// console.log(ContainsDuplicate([1,2,3,1]));

function ContainsDuplicate(nums){
   res= nums.sort((a,b) => a-b);
   for(i=1;i<res.length;i++){
    if(res[i] === res[i-1]){
        return true
    }
   
   }
   return false
}


console.log(ContainsDuplicate([1,2,3,1]));


     
    


