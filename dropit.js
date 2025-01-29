function dropElements(arr, func) {
    debugger;
    while (arr.length > 0 && !func(arr[0])) {
        debugger
      arr.shift();
    }
    console.log(arr)
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n)  {
    debugger 
    return n >= 3; 
  })
  console.log(dropElements)
