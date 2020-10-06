const Employee = require('./lib/employee')
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Mannager = require('./lib/manager');
const fs = require('fs');
const inquirer = require('inquirer');

let number; 

inquirer
    .prompt([
        {
            type: "number",
            message: "How many employees would you like to process?",
            name: "number"
        }
    ]).then(answers => {
        number = answers.number;
    }).then(() => {
        console.log(number);
    })




