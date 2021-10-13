const http = require("http");

http
.createServer((req, res) => {
  if(req.url === "/") {
      res.end("Welcome to DCS server!");
  } else if (req.url === "/about") {
      res.end("About page");
  } else if (req.url === "/contact"){
     res.end("Contact Page");
  }
  else {
      res.end("Page not found");
  }
})

.listen(5000);