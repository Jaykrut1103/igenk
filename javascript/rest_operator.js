function sum (...args){
    let sum=0
    for(let i in args){
        sum+=args[i]
    }
    console.log("sum is ",sum)
}
sum(1,5,6)