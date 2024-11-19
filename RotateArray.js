const nums=[1,2,3,4,5,6,7];
const k=3;

let n = nums.length;
let w = k % n;

function reverse(arr , start ,end){
   while(start<end){
      let temp=arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
   }
}
reverse(nums,0,n-1)
reverse(nums,0,w-1)
reverse(nums,w,n-1);
console.log(nums);


   


