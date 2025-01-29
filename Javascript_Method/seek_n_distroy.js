function destroyer(arr) {
    debugger
 const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    debugger
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
        debugger
      if (arr[i] === valsToRemove[j]) {
        debugger
        removeElement = true;
      }
    }
    if (!removeElement) {
        debugger
      filteredArray.push(arr[i]);
    }
  }
  console.log(filteredArray)
  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);