const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// body parser to parse the incoming data.. {extended: false} as the extension was deprecated add it extensively
app.use(bodyParser.urlencoded());

// static path that directs to the public folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware: functions that has access to all the req, res and next functionalities.
// next(); //helps to jump to the next middleware

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000, () => {
  console.log("Hello");
});
