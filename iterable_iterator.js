let range={
    start:0,
    end:5,
    [Symbol.iterator](){
    let that=this;
    let i=this.start;
    return {
    next:function (){
    return {value:i,done:i++ > that.end};
    }
    }
    }
    }
    for(let r of range){
        debugger
    console.log(r)
    }