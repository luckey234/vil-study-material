// function chunkArrayInGroups(arr, size) {
//     debugger
//     const newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//         debugger
//       newArr.push(arr.slice(i, i + size));
//     }
//     console.log(newArr)
//     return newArr;
//   }
//   function chunkArrayInGroups(arr, size) {
//     debugger
//     let temp = [];
//     const result = [];
  
//     for (let a = 0; a < arr.length; a++) {
//         debugger
//       if (a % size !== size - 1) temp.push(arr[a]);
//       else {
//         debugger
//         temp.push(arr[a]);
//         result.push(temp);
//         temp = [];
//       }
//     }
  
//     if (temp.length !== 0) result.push(temp);
//     console.log(result)
//     return result;
//   }
// function chunkArrayInGroups(arr, size) {
//     debugger
//     // Break it up.
//     const newArr = [];
//     let i = 0;
  
//     while (i < arr.length) {
//         debugger
//       newArr.push(arr.slice(i, i + size));
//       i += size;
//     }
//     return newArr;
//   }
function chunkArrayInGroups(arr, size) {
    debugger
    const newArr = [];
    while (arr.length > 0) {
        debugger
      newArr.push(arr.splice(0, size));
    }
    console.log(newArr)
    return newArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d","e"], 2);