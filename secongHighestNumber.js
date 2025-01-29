//second highest
const arr = [1, 8, 3, 4, 5,6,8];

let max = arr[0];
let secondMax = arr[0];

for (let i = 0; i < arr.length; i++) {
  debugger
    if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  }
  else if (arr[i] > secondMax && arr[i] !== max) {
    secondMax = arr[i];
  }
}

console.log(secondMax);

function secondlargestNumber(scno){
let arr=[...new Set(scno)].sort((a,b)=>a-b)
return arr[arr.length-2]
}
// console.log(secondlargestNumber(arr))