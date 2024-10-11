let largestNumber=function(nums){
a=nums.map(String);
b=a.sort((a,b) => (a+b) - (b+a));
rev=b.reverse();
c=rev.join("");
console.log(c);
}
largestNumber([3,30,34,5,9])
