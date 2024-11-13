const n= 234;
let splited = String(n).split('').map(Number);
let product = splited.reduce((acc,item) => acc*item);
let sum = splited.reduce((acc,item) => acc+item);
let result = product-sum;
console.log(result);
 