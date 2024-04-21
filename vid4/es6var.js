// var num = 10
// var num = 20// the value get reassignes
// //but if we use let we can only create a variable with a unique name

// let hello = 10
// // let hello = 20 //this will give error

function hello(){
    var i =0
    if(i===0){
        var hey = 20
        let hoy =40
    }
    console.log(hey)
    // console.log(hoy)// will return error let scope is only inside a block

    function sample(){
        var i =300
    }

    sample()
    console.log(i)
}



hello()