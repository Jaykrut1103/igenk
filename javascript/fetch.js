fetch("https://jsonplaceholder.typicode.com/comments/1")
.then((data)=>data.json())
.then((res)=>console.log("result is ",res))