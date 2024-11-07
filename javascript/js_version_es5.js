const array=[10,20,30,40]

console.log(Array.isArray(array))
console.log("for each loop")
array.forEach((item,index)=>{
    console.log("item",item)
})

console.log("filter method")
const newArray=array.filter((item)=>item >20)
console.log("value greater than 20",newArray)

console.log("reduce")
const sum=array.reduce((acc,item)=>acc+=item,0)
console.log("sum is ",sum)

const obj={
    name:"jaykrut",
    age:20
}
console.log("json.stringify :" ,JSON.stringify(obj))

Object.keys(obj).forEach((item,index)=>{
    console.log("key is ",item)
})