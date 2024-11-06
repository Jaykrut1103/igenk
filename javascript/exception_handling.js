const a=10
const b=0
try{
    let c=a/b
    if(c=="Infinity"){
        throw("value of b should be greater than 0")
    }else{

        console.log("ans of c is",c)
    }
}
catch(error){
    console.log(error)
}
finally{
    console.log("finally block")
}