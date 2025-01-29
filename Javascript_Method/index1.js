let a = ["name", "age" , "height"]
let b = [
{1: "vikram" , 2: 26, 3: 5.8},
{1: "adnan" , 2: 26, 3: 5.8},
{1: "ravindra" , 2: 26, 3: 5.8}
]

//result = [{name: vikram, age:26, height:5.8}, {}, {}]

let result=b.map(item=>{
    debugger
  let newobj={}
   a.forEach((key,index)=>{
    debugger
      newobj[key]=item[index+1]
  })
  
  return newobj;
}) 
console.log(result)
// a.forEach((key,index)=>{
//       newobj[key]="12"
//   })