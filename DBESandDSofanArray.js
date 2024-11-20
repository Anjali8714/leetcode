const DBESandDSofanArray = (nums) => {
    let Elementsum =nums.reduce((acc,item) => acc + item);
    let valuejoin = nums.join(''); 
    let value = valuejoin.split('');
    let Digitsum =value.reduce((acc,item) => acc +Number(item),0); 
    let Difference = Elementsum - Digitsum;
    return Difference
}
console.log(DBESandDSofanArray([1,15,6,3]));
