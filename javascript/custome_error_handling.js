class customeError extends Error{
    constructor(msg){
        super(msg)
    }
}
try{
    if(10!=100){
        throw new customeError("both value is not eq")
    }
}
catch(error){
    console.log("error",error) 
}
finally{
    console.log("finally block")
}