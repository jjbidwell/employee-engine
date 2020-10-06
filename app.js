const Employee = require('./lib/employee')
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Mannager = require('./lib/manager');
const fs = require('fs');
const inquirer = require('inquirer');
let number = 0;
let count = 1;
let job;
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
            job = answer.position;
            console.log(type);
            employees();
        })
}

function employees(){

questions()
    .then((answers) => {

      //employeeArray.push(new Engineer(answers.name, count, 'jjbidwell262@gmail.com', 'jjbidwell'));

        });
} 


function questions() {
    if(job === "Engineer"){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the engineer's name",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Please enter the engineer's email",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Please enter the engineer's GitHub username",
                    name: "github"
                }
            ]).then((answers) => {
                employeeArray.push(new Engineer(answers.name, count, answers.email, answers.github));
                if(count < number){
                    count++;
                    whatType();
                } else {
                    console.log(number + ' people logged!');
                    console.log(employeeArray);
                }
            })
    } else if(job === "Intern"){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the intern's name",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Please enter the intern's email",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Please enter the intern's current school",
                    name: "school"
                }
            ])
    } else if(job === "Manager"){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Please enter the manager's name",
                    name: "name"
                },
                {
                    type: "input",
                    message: "Please enter the manager's email",
                    name: "email"
                },
                {
                    type: "number",
                    message: "Please enter the manager's office number",
                    name: ""
                }
            ])
    }
}