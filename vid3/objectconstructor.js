//making an object using a fucntion

function Person(name, age, place){
    this.name = name
    this.age = age
    this.place = place

    this.display = function(){
        console.log("Name = "+this.name+"Age :"+this.age)
    }
}

var sam = new Person("sam",20,"Nyc")
var joe = new Person("joe",18,"Dubai")

sam.display()
joe.display()