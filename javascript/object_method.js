const student={
    name:"jaykrut",
    age:"30"
}
const Obj={
    college:"SSIT"
}
Object.assign(student,Obj)
const student2=[
    ["name","jaykrut"],
    ["age",30]
]
console.log(Object.keys(student))
console.log(Object.entries(student))
console.log(Object.values(student))
const ans=Object.fromEntries(student2)
console.log(ans)