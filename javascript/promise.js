const myPromise=new Promise((resolve,reject)=>{
    let name="jaykrut"
    if(name=="jaykrut"){
        resolve("resolved")
    }
    else{
        reject("reject")
    }
})
myPromise.then((data)=>console.log(data))
.catch((error)=>console.log(error))