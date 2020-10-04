const fs = require('fs');
const inquirer = require('inquirer');

function Employee (name, title, id, email, github){
  this.name = name;
  this.title = title;
  this.id = id,
  this.email = email;
  this.github = github;
}


module.exports = Employee;