const s="the sky   is blue";
let splitword=s.trim().split(" ").filter((x) =>  x.length > 0).reverse().join(" ")
console.log(splitword);
