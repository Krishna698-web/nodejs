const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "sequal@123",
});

module.exports = pool.promise(); //.promise() to work and return and promise
