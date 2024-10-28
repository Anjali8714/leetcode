const findMedianSortedArrays = (nums1,nums2) => {
let array =nums1.concat(nums2).sort();
for(i=0;i<array.length;i++){
    for(j=array.length-1;j>0;j--){
        if(i==j){
            return array[i];
        }else{
            return (array[i]+array[j])/2;
        }
    }
}


}

console.log(findMedianSortedArrays( [], [1]));
