const str="this is javascript code and you find maximum"
function findMax(str) {
    debugger
  let max = 0;
  let maxStr = '';
  let count = {};

  for (let i = 0; i < str.length; i++) {
    debugger
    let word = str[i];
    if (count[word]) {
        debugger
      count[word]++;
    } else {
      count[word] = 1;
    }
    if (count[word] > max) {
        debugger
      max = count[word]; 
      maxStr = word;
      console.log(max)
    }
  }}
  findMax(str)
// function findMaxOccurrence(str) {
//     let count = {};
//     let max = 0;
//     let maxStr = '';
  
//     str.split('').forEach(char => {
//       if (count[char]) {
//         count[char]++;
//       } else {
//         count[char] = 1;
//       }
//       if (count[char] > max) {
//         max = count[char];
//         maxStr = char;
//       }
//     });
  
//     return maxStr;
//   }
// function findMaxOccurrence(str) {
//     let countMap = new Map();
//     let max = 0;
//     let maxStr = '';
  
//     str.split('').forEach(char => {
//       if (countMap.has(char)) {
//         countMap.set(char, countMap.get(char) + 1);
//       } else {
//         countMap.set(char, 1);
//       }
//       if (countMap.get(char) > max) {
//         max = countMap.get(char);
//         maxStr = char;
//       }
//     });
  
//     return maxStr;
//   }