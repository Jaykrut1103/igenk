const array=[10,20,30,50]
console.log(array.length)
console.log(array[0])
console.log(array.pop())
array.push(40)
array.unshift(50)
console.log(array)
array.shift()
console.log(array)
console.log(array.slice(1,3))
array.splice(1,0,90)
console.log(array)

array.map((item)=>console.log(item))

const array2=array.filter((item)=>item>50)
console.log("array2",array2)

let ans=array.reduce((sum,item)=>sum+=item,0)
console.log("ans",ans)

ans=array.some((item)=>item>10)
console.log("ans",ans)

ans=array.every((item)=>item>50)
console.log("ans",ans)