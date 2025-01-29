const array=[5,7,9,11,15,17]
 
function findMissingOddNumber(arr){
    
    
    for(let i=0;i<arr.length;i++){
        let current =arr[i] ;
        let next =current + 2;
        if(arr[i+1]===next) continue;
        else  console.log(next) 
        break
        ;
    }
}
// findMissingOddNumber(array)


function findMissingOddNumber2(arr){
    
    
    for(let i=0;i<arr.length;i++){
        debugger
        let current =arr[i] ;
        let next =current + 2;
        if(arr[i+1] !==next) {
            console.log(next)
            break
                    }
        
    }
}
// findMissingOddNumber2(array)

let missingNum = 0;
for (let i = 0; i < array.length; i++) {
    if(array[i] + 2 !== array[i+1]) {
        missingNum = array[i] + 2;
    }
}

// console.log(missingNum);

const arrays = [5,7,9,11,15,17];
const missingNumber = array.find(num => num % 2 !== 0 && num + 2 !== array[array.indexOf(num) + 1]);
console.log(missingNum + 2);