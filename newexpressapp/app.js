const http = require('http');

http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("bhai / mila");
    }
}).listen(5000);