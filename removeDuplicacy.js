var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
   //remove duplicacy in array

// 1. using set 
let arrayWithDuplicates = [1, 2, 3, 4, 5, 6, 1, 2, 5];
let set = new Set(arrayWithDuplicates);
let arrayWithoutDuplicates = [...set];
// console.log(arrayWithoutDuplicates); // [1, 2, 3, 4, 5, 6]

// using____function
function removeDuplicates(arr) {
    debugger
    return arr.filter((item, index) => arr.indexOf(item) === index);

  }
  
  let newarray = ["apple","mango","apple","orange","mango","mango"];
  removeDuplicates(newarray);
   console.log(removeDuplicates(newarray)); // [1, 2, 3, 4, 5, 6]


// using__array__iterator 
function removeDuplicates(arr) {
    debugger
    let uniqueArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
// console.log(removeDuplicates(newarray)); 