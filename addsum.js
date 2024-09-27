nums=[3,2,3];
target=6;
c=[];
for(i=0;i<nums.length;i++){
for(j=i+1;j<nums.length;j++){
    b=nums[i]+nums[j];
    if(b==target){
        c.push(i);
        c.push(j);
       
    }
}
}
console.log(c);



