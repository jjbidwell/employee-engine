const Employee = require('./lib/employee')
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Mannager = require('./lib/manager');
const fs = require('fs');
const inquirer = require('inquirer');
let number = 0;
let count = 1;
let type;
let employeeArray = [];

inquirer
    .prompt([
        {
            type: "number",
            message: "How many employees would you like to enter?",
            name: "number"
        }
    ]).then(answers => {
        number = answers.number;
        whatType();
    });

function whatType(){    
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'position',
                message: `What position does employee #${count} hold?`,
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager"
                ]
            }
        ]).then(answer => {
            type = answer.position;
            console.log(type);
            employees();
        })
}

function employees(){

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: "name"
            },
        ]).then((answers) => {
            //employeeArray.push(new Engineer(answers.name, count, 'jjbidwell262@gmail.com', 'jjbidwell'));
            if(count < number){
                count++;
                whatType();
            } else {
            console.log(number + ' people logged!');
            console.log(employeeArray);
            }
        });
} 