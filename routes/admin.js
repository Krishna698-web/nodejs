const path = require("path");

const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  res.redirect("/");
});
//   res.send(req.body.title); //to get the title displayed on to the requested page
//To redirect to the next given path

module.exports = router;
