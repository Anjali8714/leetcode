const MinimumNumberGame = (nums) => {
  let arr=[];
  let num=nums.sort((a,b)=>b-a);
  while(nums.length){     
        let alice =num.pop()
        let bob = num.pop()
        arr.push(bob)
        arr.push(alice)      
  }
  return arr
}

console.log(MinimumNumberGame([5,4,2,3]));

