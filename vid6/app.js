var http = require('http')

http.createServer(function (req,res){
    res.write('package')
    res.end()
}).listen(7000)
