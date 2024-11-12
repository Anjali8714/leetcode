const mergeTwoLists = (list1 , list2)=> {
    let concatedvalue = [...list1,list2];
    let value = concatedvalue.flat()
    let result = value.sort()
    return result
}
console.log(mergeTwoLists([1,2,4] , [1,3,4]));
