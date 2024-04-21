class Sample{
    samplehello(){
        console.log('this is a sample function')
    }
}

class Hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1 = num1
        this.num2 = num2
    }

    hello(){
        console.log('hello world'+(this.num1+this.num2))
    }
}

let hey = new Hello(10,20)
hey.hello()
hey.samplehello()