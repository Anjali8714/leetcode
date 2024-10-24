const CountPrime = (n) => {
    count = 0;
 for(i=2 ; i<n ; i++){
    for(j=2 ; j<=i ; j++){
        if(i % j != 0){
            count ++
        }
        break;
    }
 }
 return count
}

 console.log(CountPrime(10));
 
