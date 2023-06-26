const fs = require("fs");

const routing = (req, res) => {
  const url = req.url; //requested url localhost:3000/
  const method = req.method;
  if (url === "/") {
    res.write("<head>");
    res.write("<head><title>Form submission with post request</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="name"><button type="submit">Send</button></form></body>'
    ); //responded url localhost:3000/message
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const data = parsedData.split("=")[1];
      console.log(data);
      fs.writeFileSync("message.txt", data); //creating and writing into a new file
    });
    res.statusCode = 302; //temprorarly found
    res.setHeader("Location", "/"); //redirecting back to localhost:3000/
    return res.end(); //end of response
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>"); //beginning of the html
  res.write("<head><title>Hosted on nodejs server</title></head>");
  res.write("<body><h1>I'm the response from the Node js server!!</h1><body>");
  res.write("</html>"); //end of the html
  res.end();
};

module.exports = routing;
