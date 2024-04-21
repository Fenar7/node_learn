var r = require('readline-sync')

var day = parseInt(r.question("Enter the day number"))
console.log(day)
var dayname

switch(day){
    case 1:
        dayname="monday" 
        break;
    case 2:
        dayname="tuesday"
        break;
    case 3:
        dayname="wednesday"
        break;
    default:
        dayname="invalid input"
        break;
}

console.log("Today is "+dayname)