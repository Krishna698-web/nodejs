const path = require("path");

const express = require("express");
const router = express.Router();

router.get("/user", (req, res, next) => {
  res.sendFile(path.join(__dirname, "user.html"));
});

module.exports = router;
