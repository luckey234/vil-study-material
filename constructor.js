let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

// let aa =new dog()
// console(aa)

function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }
// console.log(new Dog())
function Bird() {
    this.name = "Albert";
    this.color  = "blue";
    this.numLegs = 2;
  }
  
  let blueBird = new Bird();
//   console.log(blueBird)

function Bird(name) {
    debugger
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  for (let property in canary) {
    debugger
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  // console.log(ownProps);
  // Only change code below this line

  function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
    debugger
  if (candidate.constructor === Dog) {
    debugger
      return true;
    } else {
      return false;
    }
  }