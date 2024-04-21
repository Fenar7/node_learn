var num = 10
function hello(){
    num = 20
    function hey(){
        num=30
    }
    hey()//this hay only works inside this hello funciton
}

hello()
console.log(num)