const connection = require("./connection");

//add a department, add a role, add an employee, and update an employee role

//you can use this class to store methods for querying the DB
class DB {
  constructor(connection) {
    this.connection = connection;
  }

  //write your methods
  viewAllEmployees() {
    //write your query to get all employees

    return this.connection.promise.query("write SQL query");
  }

  addAnEmployee(employee) {
    //write query to add an employee to the database
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  updateAnEmployee() {}

  addEmployeeRole() {}

  addDepartment() {}
}

module.exports = new DB(connection);
