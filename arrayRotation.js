const input=[9,7,11,4,-2]
const output=[11,4,-2,2,7]
function rorateArray(input){
    
    for(let i=0;i<2;i++){
        
        let temp=input[0]
        for(i=0;i<input.length-1;i++){
            
            input[i]=input[i+1]
        }
        input[input.length-1]=temp
    }
    console.log(input)
}
// rorateArray(input)



const inputs=[9,7,11,4,-2]
const rotate = (arr, num) => {
    
    const rotateArr = arr.slice(num);
    
    return [...rotateArr, ...arr.slice(0,num)];
};

console.log(rotate(inputs, 2)); // Output: [11, 4, -2, 9, 7]


function rorateArray(input, num) {
    
    for (let i = 0; i < num; i++) {
        
        let temp = input[0];
        for (let j = 0; j < input.length - 1; j++) {
            
            input[j] = input[j + 1];
        }
        input[input.length - 1] = temp;
    }
    console.log(input);
}

// rorateArray(input, 2); // Output: [11, 4, -2, 9, 7]