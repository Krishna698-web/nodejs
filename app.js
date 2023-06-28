const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log('I"m in the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('I"m in next middleware');
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("listening");
});

// server.listen(3000);
