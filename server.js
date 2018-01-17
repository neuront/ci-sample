var http = require('http')
var server = http.createServer(function(request, response) {
    response.end('<html><head><title>CI Sample</title></head><body>Hello</body></html>');
});

server.listen(8080, function(e) {
    console.log('Server started');
});
