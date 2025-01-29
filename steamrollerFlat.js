function steamrollArray(arr) {
    debugger
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
          debugger
      if (Array.isArray(arr[i])) {
        debugger
        // Recursively flatten entries that are arrays ([1, [2], [3, [[4]]]])
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        debugger
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  function steamrollArray2(arr) {
    debugger
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
// 3rd way
function steamrollArray3(arr) {
  debugger
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
// 4th way
function steamrollArray4(val,flatArr=[]) {
  debugger
  val.forEach(item => {
    debugger
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
  // test here
  steamrollArray4([[["a"]], [["b"]]]);