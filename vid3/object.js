var Person = {
    name: "Dilshad",
    age: 25,
    place: "Calicut",

    display: function(){
        console.log(this.name)// use this keyword to reference the variable inside an object
    }
}

console.log(Person.name)
console.log(Person['age'])
Person.displayafe=function(){
    console.log(this.age)
}

Person.name="sam"
Person.dob="12"

for(i in Person){
    console.log(i)//i gets keys
    console.log(Person[i])
}
Person.display()
