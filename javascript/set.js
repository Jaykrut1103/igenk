let set= new Set()
set.add(50)
set.add(60)
set.add(50)
console.log(set)
console.log(set.has("name"))
console.log(set.size)

for(let x of set.keys()){
    console.log("key is ",x);
    
}
for(let x of set.values()){
    console.log("values is ",x);
    
}
for(let x of set){
    console.log("key value pair : ",x);
    
}