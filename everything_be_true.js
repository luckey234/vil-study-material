function truthCheck(collection, pre) {
    debugger
    // Create a counter to check how many are true.
    let counter = 0;
    // Check for each object
    for (let c in collection) {
        debugger
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        debugger
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
   console.log(counter == collection.length)
    return counter == collection.length;
  }

  function truthCheck2(collection, pre) {
    debugger
    return collection.every(function (element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }
  function truthCheck3(collection, pre) {
    debugger
    // Is everyone being true?
    return collection.every(obj => obj [pre]);
  }
  truthCheck3([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users: []}], "users");