const MedianofTwoSortedArray=(nums1,nums2)=>{
    let array =nums1.concat(nums2).sort((a, b) => a - b);
    let len = array.length;
    let res;
        if(len%2!==0){
            res=Math.trunc(len/2)
            return array[res]
        }else{
            res=len/2;
           let sum=array[res]+array[res-1];
            return sum/2
        }
    
    
}

console.log(MedianofTwoSortedArray([1,],[1]));
