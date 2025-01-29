// ___________________memorization
sum=0
const calc=(n)=>{
    debugger
    for(let i=0;i<=n;i++){
        debugger
       sum+=i 
    }
    return sum
}
const memo=(fun)=>{
    let cache={}
    debugger
    return function(...args){
        debugger
        let n=args[0]
        if(n in cache){
            debugger
            console.log('cache',cache)
            return cache[n]
        }else {
            debugger
            console.log("computing first time")
            let result =fun(n)
            cache[n]=result
            return result
        }
    }
}
console.time()
const efficietMemo=memo(calc)
console.log(efficietMemo(5))
console.timeEnd()

console.time()
console.log(efficietMemo(5))
console.timeEnd()


