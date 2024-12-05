const mergeTwoLists = (list1 , list2)=> {
        // let concatedvalue=[...list1,list2];
    let concatedvalue=list1.concat(list2);
    console.log(concatedvalue);
    
    let value = concatedvalue.flat()
    console.log(value);
    
    let result = value.sort()
    return result
}
console.log(mergeTwoLists([1,2,4] , [1,3,4]));
