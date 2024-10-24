const CountPrime = (n) => {
    let count = 0;
    
    for (let i = 2; i < n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break; 
            }
        }
        if (isPrime) {
            count++;
        }
    }

    return count;
}

 console.log(CountPrime(3));
 
