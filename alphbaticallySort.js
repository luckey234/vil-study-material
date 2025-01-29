function ascendingOrder(arr) {
  let sort= arr.sort(function(a, b) {
    return a - b;
  });
  console.log(sort)
}

// ascendingOrder([1, 5, 2, 3, 4]);
function reverseAlpha(arr) {
    debugger
  let sort= arr.sort(function(a, b) {
    debugger
    return a === b ? 0 : a < b ? 1
     : -1;
  });
    console.log(sort)
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);