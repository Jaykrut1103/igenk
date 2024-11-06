console.log("start")

setTimeout(() => {
        console.log("settime out")
}, 5000);

fetch("https://jsonplaceholder.typicode.com/comments/1")
.then((data)=>data.json())
.then((res)=>console.log("result is ",res))

console.log("end")