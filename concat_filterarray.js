// 1st method
// function diffArray(arr1, arr2) {
//     debugger
//   const difference = new Set(arr1);
//   arr2.forEach((ele) =>
//     difference.has(ele) ? difference.delete(ele) : difference.add(ele)
//   );
//   console.log(Array.from(difference))
//   return Array.from(difference);
// }
// 2nd method
// function diffArray(arr1, arr2) {
//     debugger
//     const newArr = [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item))
//     return newArr;
//   }
function diffArray(arr1, arr2) {
    debugger
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

