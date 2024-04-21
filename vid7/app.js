var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (req,res){
    var q = url.parse(req.url, true)
    console.log(q.pathname)


    if(q.pathname==='/'){
        fs.readFile('sample.html',function(err, data){ // file is read if success we get data else err object
            res.writeHead(200,{'Content-Type' : 'text/html'}) // 200 is the code for webrequest success we want to pass an object specifying the type
            res.write(data)
            res.end()// AFTER file is read execute 
        })//async model so we add a callback function
    }else if(q.pathname==='/signup'){
        fs.readFile('signup.html',(err,data)=>{
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(data)
            res.end()
        })
    }else if(q.pathname==='/signupaction'){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        console.log(q.query)
        console.log(q.query.lname)

        res.write('<h1>'+q.query.fname+'</h1>')

        res.write('action')
        res.end()
    }else{
        res.writeHead(404,{'Content-Type' : 'text/html'})
        res.write('error')
        res.end()   
    }
}).listen(7000, ()=>{
    console.log('server started')
})
