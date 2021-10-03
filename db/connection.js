const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password7",
  database: "Employee_db",
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
