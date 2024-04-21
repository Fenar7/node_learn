var http = require('http')
var fs = require('fs')

http.createServer(function (req,res){
    fs.readFile('sample.html',function(err, data){ // file is read if success we get data else err object
        res.writeHead(200,{'Content-Type' : 'text/html'}) // 200 is the code for webrequest success we want to pass an object specifying the type
        res.write(data)
        res.end()// AFTER file is read execute 
    })//async model so we add a callback function
}).listen(7000)
