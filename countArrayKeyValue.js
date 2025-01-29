// let countObj = {};
// let arr = [1,2,3,1,2,3,4];

// let countFunc = keys => {
//     debugger
//   countObj[keys] = ++countObj[keys] || 1;
// }
// arr.forEach(countFunc);
// console.log(countObj) 
// {1: 2, 2: 2, 3: 2, 4: 1}
function getNumOfTimes(arrayOfNums){
    debugger
    let found = {}
        for (let i = 0; i < arrayOfNums.length; i++) {
            let keys = arrayOfNums[i].toString()
            found[keys] = ++found[arrayOfNums[i]] || 1
        }
console.log(found)
    return found
}
getNumOfTimes([1, 4, 4, 4, 5,5, 3, 3, 3,4])
//{ '1': 1, '3': 3, '4': 3, '5': 1 }