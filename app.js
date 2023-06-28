const express = require("express");

const app = express();

//Middleware: functions that has access to all the req, res and next functionalities.
// next(); //helps to jump to the next middleware

app.use("/", (req, res, next) => {
  console.log("I'm from / route");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("I'm from /user route");
  res.send("I'm from the users route");
});

app.listen(3000, () => {
  console.log("Hello");
});
