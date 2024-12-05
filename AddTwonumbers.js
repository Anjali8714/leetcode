const AddTwonumbers= (l1,l2)=>{
    let rev1=Number(l1.reverse().join(''));
    let rev2=Number(l2.reverse().join(''));
    let sum=rev1+rev2;
    let result=String(sum).split('').reverse().map(Number);     
    return result
}
console.log(AddTwonumbers([2,4,3],[5,6,4]));
