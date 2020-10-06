const Employee = require('./lib/employee')
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Mannager = require('./lib/manager');
const fs = require('fs');
const inquirer = require('inquirer');
let number = 0;
let count = 1;

inquirer
    .prompt([
        {
            type: "number",
            message: "How many employees would you like to enter?",
            name: "number"
        }
    ]).then(answers => {
        number = answers.number;
        employees();
    });

function employees(){

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's name?",
                name: "name"
            },
        ]).then((answers) => {
            if(count < number){
                console.log(count);
                count++;
                employees();
            } else {
            console.log(number + ' people logged!');
            console.log(answers);
            }
        });
} 