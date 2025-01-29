// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
// };

// dog.sayLegs();



function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }
// Dog()

var arr = [4,4,4,2,2,3];
const countValues = (arr) => {
const result = {};
  arr.forEach((value) => {  
    result[value] = result[value] ? result[value] + 1 : 1;
  });
  return result;
};

console.log(countValues(arr));