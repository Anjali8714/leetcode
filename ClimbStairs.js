const ClimbStairs = (n) => {
  
    let a = 1;
    let b = 1;

    for (let i = 0; i < n; i++) {
        let tmp = a;
        a = a + b;
        b = tmp;
    }
    return b;
}

console.log(ClimbStairs(4));
 
