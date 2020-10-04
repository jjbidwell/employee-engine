const fs = require('fs');
const inquirer = require('inquirer');

function Employee (name, title, id, email, github){
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }
  if (typeof title !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'title' to be a non-empty string");
  }
  if (typeof id !== "number" || isNaN(id) || id < 0) {
    throw new Error("Expected parameter 'id' to be a non-negative number");
  }
  if (typeof email !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }
  if (typeof github !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'github' to be a non-empty string");
  }


  this.name = name;
  this.title = title;
  this.id = id,
  this.email = email;
  this.github = github;
}


module.exports = Employee;