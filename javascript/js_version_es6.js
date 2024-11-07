let a=10;
const b=20
a=30
console.log("value of a is ",a)

const array=[10,20,30]
const obj={
    name:"jaykrut",
    age:22
}

const [num1,num2]=[...array]
console.log("num1 ",num1,"num2",num2)

const {name,age}={...obj}
console.log("name :" ,name,"age : ",age)

const res=array.find((item)=>item> 20)
console.log("res",res)

const newArray=Array.from("jaykrut")
console.log("newArray",newArray)

for(let i of array.keys()){
    console.log("key is ",i)
}