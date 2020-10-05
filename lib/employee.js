const fs = require('fs');
const inquirer = require('inquirer');

class Employee {
constructor(name, id, email){
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }
  if (typeof id !== "number" || isNaN(id) || id < 0) {
    throw new Error("Expected parameter 'id' to be a non-negative number");
  }
  if (typeof email !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }
  
  this.name = name;
  this.id = id,
  this.email = email;
  }
}

// function prompt(){
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter the employee's name",
//         name: "name"
//       },
//     ]).then(answers => {
//       console.log(answers.name);
//     })
// }

// prompt();

module.exports = Employee;
//module.exports = prompt;