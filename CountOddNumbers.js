const CountOddNumbers = (low , high) => {
  let count =0;
  for(i=low ; i<=high ; i++){
    if(i%2){
        count ++
    }
  }
  return count
}

console.log(CountOddNumbers(8 ,10));
 
