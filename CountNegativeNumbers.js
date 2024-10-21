const grid=[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
let flatedArray=grid.flat().sort();
let count= 0;
for(i=0;i<flatedArray.length;i++){
    if(flatedArray[i]<0){
        count++
    }
}
console.log(count);
