const inq = require("inquirer");
const mysql = require("mysql");
const app = require("../app");
const view = require("./view");

exports.addEmployee = () => {
    view.getAllRoles(function(rolesResults) {
       let roles = [];
       for(var i = 0; i < rolesResults.length; i++) {
           roles.push(rolesResults[i].title);
       }
        const options = [
         {
             type: "input",
             message: "Employee First Name",
             name: "firstName",
             default: "Snow"
         },
         {
             type: "input",
             message: "Employee Last Name",
             name: "lastName",
             default: "Wood"
         },
         {
             type: "list",
             message: "Employee Role",
             name: "role",
             choices: roles
         }
         ];
 
         inq.prompt(options)
         .then((answers) => {
             var roleId = null;
             for(var i= 0; i < rolesResults.length; i++) {
                 if(rolesResults[i].title === answers.role) {
                     roleId = rolesResults[i].role_id
                 }
             }
             connection.query("INSERT INTO employees SET ?",
                 {
                     first_name: answers.firstName,
                     last_name: answers.lastName,
                     emp_role_id: roleId
                 },
             function(err,results) {
                 if(err) throw err;
                 console.log("Successfully added " + answers.firstName + " " + answers.lastName );
                 app.start();
             });
         });
     });
 };