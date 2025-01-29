// Arguments Optional
// 
function addTogether() {
    debugger
    const [first, second] = arguments;
  
    if (typeof (first) === "number") {
      if (typeof (second) === "number") return first + second;
      if (arguments.length === 1) return (second) => addTogether(first, second);
    }
  }
  addTogether(5)(7)

  //filer checking
  const json = {
    "!rows": [],
    "!cols": [],
    "A1": {
      "t": "s",
      "v": "Sr. No."
    },
    "B1": {
      "t": "s",
      "v": "Short Code"
    },
    "C1": {
      "t": "s",
      "v": "Country Name"
    },
    "D1": {
      "t": "s",
      "v": "Is Active"
    },
    "E1": {
      "t": "s",
      "v": "Action"
    },
    "!ref": "A1:E1",
    "!fullref": "A1:E1"
  };
  
  const targetValue = "Action";
  
  const keys = Object.keys(json);
  const foundKey = keys.find(key => json[key].v === targetValue);
  
  if (foundKey) {
    const foundObject = json[foundKey];
    console.log(foundObject);
  } else {
    console.log("Object not found.");
  }
  