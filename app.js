const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// body parser to parse the incoming data.. {extended: false} as the extension was deprecated add it extensively
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware: functions that has access to all the req, res and next functionalities.
// next(); //helps to jump to the next middleware

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("Hello");
});
