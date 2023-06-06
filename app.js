const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url, req.method, req.headers);
  //   process.exit();
  res.setHeader("Content-type", "text/html"); //server responded with html on the page

  //   The html that responded by the server
  res.write("<html>"); //beginning of the html
  res.write("<head><title>Hosted on nodejs server</title></head>");
  res.write("<body><h1>I'm the response from the Node js server!!</h1><body>");
  res.write("</html>"); //end of the html
});

server.listen(3000);
