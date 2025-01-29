const input1={a:1,b:2,c:3,d:10,e:12}
const input2={a:2,e:12,f:6,d:10}
const output = {};
Object.keys(input1).forEach(key => {
    debugger
  if (input2[key] && input1[key] === input2[key]) {
    debugger
    output[key] = input1[key];
  }
});

console.log(output); // {d: 10, e: 12}


let obj={}
for(let i in input1){
    if(input1[i]===input2[i])
    obj[i]=input1[i]
}
console.log(obj)