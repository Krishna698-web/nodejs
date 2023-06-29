const express = require("express");
const app = express();

const userRoutes = require("./practiceUser");

app.use(userRoutes);

app.listen(3000, () => console.log("I am listening"));
