// var dt = new Date()
// console.log('hello')
// for(i=0;i<1000;i++){
//     console.log('loop')
// }
// console.log('end')
// var diff = new Date() - dt
// console.log(diff)

function longTask(millsec){
    dt = new Date()
    while(new Date - dt <= millsec){

    }
}

function showEnd(){
    console.log('end')
}

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)