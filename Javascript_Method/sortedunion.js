function uniteUnique(arr) {
    debugger
    const finalArray = [];
  
    for (let i = 0; i < arguments.length; i++) {
        debugger
      const arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (let j = 0; j < arrayArguments.length; j++) {
        debugger
        let indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  console.log(finalArray)
    return finalArray;
  }
//   2nd way
function uniteUnique2(arr) { 
    const args = [...arguments];
    const result = [];
    for (let i = 0; i < args.length; i++) {
      for (let j = 0; j < args[i].length; j++) {
        if (!result.includes(args[i][j])) {
          result.push(args[i][j]);
        } 
      }
    }
    return result;
  }
  // 3rd way
  function uniteUnique3(...arr) {
    debugger
    console.log([...new Set(arr.flat())])
    return [...new Set(arr.flat())];
  }
  
  // Or as an arrow function
  const uniteUnique4 = (...arr) => [...new Set(arr.flat())];
  function uniteUnique() {
    return [...arguments]
      .flat()
      .filter((item, ind, arr) => arr.indexOf(item) === ind);
  }
  

  
  uniteUnique4([1, 3, 2], [5, 2, 1, 4], [2, 1]);