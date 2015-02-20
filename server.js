var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    var qs = url.parse(request.url, true).query;
    var fileStream = fs.createReadStream('arrived.wav');
    if (qs.here == 'yes') {
        response.writeHead(200, {
            'Content-Type': 'audio/wav'
        });
        fileStream.pipe(response);
    } else {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        response.end("Not yet\n");
    }
});

server.listen(8000);
