const path = require("path");

const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.send(
    '<form action="/admin/add-product" method="post"><input type="text" name="title"/><button type="submit">Submit</button></form>'
  );
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
//   res.send(req.body.title); //to get the title displayed on to the requested page
//To redirect to the next given path

module.exports = router;
