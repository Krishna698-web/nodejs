const path = require("path");

const express = require("express");

const mongoConnection = require("./utils/database");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(express.json());

// static path that directs to the public folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

// app.listen(3000, () => {
//   console.log("Hello");
// });

mongoConnection((client) => {
  console.log(client);
  app.listen(3000);
});
