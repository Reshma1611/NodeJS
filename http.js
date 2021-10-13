const http = require("http");

http
.createServer((req, res) => {
  if(req.url === "/") {
      res.end("Welcome to DCS server!");
  } else if (req.url === "/about") {
      res.end("About page");
  } else {
      res.end("Page not found");
  }
})
.listen(5000);