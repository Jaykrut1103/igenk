const student={
    name:"jaykrut",
    age:"23",
    'full name':"Jaykrut Kotadiya",
    getAge(){
        console.log(`age is `+this.age)
    }
}
console.log(student['full name'])
console.log(student.getAge())

// Not Working
// console.log(student.'full name) 