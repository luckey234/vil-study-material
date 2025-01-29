const str="this is java script code"
let aa=str.split("").reverse().join('').replace(/,/,"")
let reversedStr = str.split(' ').map(char => char).reverse().join('');

let reversedStr2 = '';
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr2 += str[i];
}

// console.log(reversedStr)
// console.log(aa)
// console.log(reversedStr2)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// each and every value of Array
let strArray = str.split(" ");
let reversedString = '';

strArray.forEach(word => {
    debugger
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    debugger
    reversedWord += word[i];
  }
  reversedString += reversedWord + ' ';
});

console.log(reversedString); // Output: "sihT si avaj tpircs edoc "
// simple way most ?

let reversedStrings = '';

for (let i = str.length - 1; i >= 0; i--) {
  reversedStrings += str[i];
}

console.log(reversedStrings); // Output: "edoc tpircs avaj si sihT"

//same place changes string simple javascript method way ............
const reversedStranother=str.split(' ').map(item=>item.split('').reverse().join(''))
console.log(reversedStranother.join(' '))