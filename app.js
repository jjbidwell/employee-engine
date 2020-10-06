const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
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
    console.log(`=====Employee #${count}=====`)
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
            questions();
        })
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
            });
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
            ]).then((answers) => {
                employeeArray.push(new Intern(answers.name, count, answers.email, answers.school));
                if(count < number){
                    count++;
                    whatType();
                } else {
                    console.log(number + ' people logged!');
                    console.log(employeeArray);
                }
            });
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
                    name: "office"
                }
            ]).then((answers) => {
                employeeArray.push(new Manager(answers.name, count, answers.email, answers.office));
                if(count < number){
                    count++;
                    whatType();
                } else {
                    console.log(number + ' people logged!');
                    console.log(employeeArray);
                    fs.writeFile('./output/index.html', `<p> ${JSON.stringify(employeeArray, null, 5)} </p>`, (err) => {
                        if (err){
                            console.log(err);
                        }
                    })
                }
            });
    }
}