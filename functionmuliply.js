Array.prototype.myMap = function(callback) {
    debugger
    const newArray = [];
    // Only change code below this line
   for (let i = 0; i < this.length; i++) {
    debugger
      newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    console.log(newArray)
    return newArray; 
  };
//   item =[23, 65, 98, 5, 13]
myArray=[23, 65, 98, 5, 13]
  const newArray = myArray.myMap(function(item) {
    return item * 2;
  });