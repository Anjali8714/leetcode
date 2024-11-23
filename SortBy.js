const  sortBy = function(arr, fn) {
   let result = arr.sort((a,b) => fn(a)-fn(b))
   return result
}

console.log(sortBy([5,4,1,2,3] , (x) => x));
