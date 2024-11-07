const obj={
    firstName:"jaykrut",
    lastName:"kotadiya",
    getData(){
        return this
    }
}
console.log("this use in object",obj.getData())

function display(){
    console.log("this keyword use in function",this)
}
display()

const arrowFucntion = () => this
console.log("this keyword used in arrow function",arrowFucntion())