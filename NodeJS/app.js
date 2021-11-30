var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: ', req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    
    // Only able to send HTML as static read only. 
    // Does not take the src scripts from HTML.
    var myReadFs = fs.createReadStream( "./index.html", 'utf8');
    myReadFs.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Listening to server"); 

