let map=new Map()

map.set("name","jaykrut")
map.set("age",20)
console.log(map)
console.log(map.get("name"))
console.log(map.has("name"))
console.log(map.size)

for(let x of map.keys()){
    console.log("key is ",x);
    
}
for(let x of map.values()){
    console.log("values is ",x);
    
}
for(let x of map){
    console.log("key value pair : ",x);
    
}